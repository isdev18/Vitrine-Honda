document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("carouselContainer");
  const track = document.getElementById("carouselTrack");
  const indicatorsWrap = document.getElementById("carouselIndicators");

  if (!container || !track) return;

  // parâmetros ajustáveis
  let speed = 0.6; // pixels por frame (ajuste pra mais/menos)
  const pauseOnHover = true;

  // pega itens originais
  let items = Array.from(track.children);

  // adiciona label dentro de cada item (se já houver não adiciona)
  items.forEach(it => {
    if (!it.querySelector('.item-label')) {
      const title = it.dataset.title || "";
      const label = document.createElement('div');
      label.className = 'item-label';
      label.textContent = title;
      it.appendChild(label);
    }
  });

  // duplicação para loop infinito (faz o clone apenas uma vez)
  track.innerHTML += track.innerHTML;
  // atualiza lista completa (original + clone)
  const allItems = Array.from(track.children);

  // cria indicadores baseados no número original de itens
  function createIndicators() {
    if (!indicatorsWrap) return;
    indicatorsWrap.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot';
      dot.dataset.index = i;
      dot.addEventListener('click', () => {
        // ao clicar num dot, centralizamos o item correspondente
        centerOnIndex(i);
      });
      indicatorsWrap.appendChild(dot);
    }
  }

  createIndicators();

  // variáveis do loop
  let rafId = null;
  let scrollPos = 0;

  // função de auto-scroll por RAF
  function step() {
    scrollPos += speed;
    // escreve o scroll (usamos scrollLeft do container)
    container.scrollLeft = scrollPos;

    // quando atingir metade (duplicação), rebobina metade
    if (scrollPos >= track.scrollWidth / 2) {
      scrollPos -= track.scrollWidth / 2;
      container.scrollLeft = scrollPos;
    }

    // atualiza classes de destaque
    updateActiveByCenter();

    rafId = requestAnimationFrame(step);
  }

  // inicia auto-scroll
  rafId = requestAnimationFrame(step);

  // pausa e retoma
  if (pauseOnHover) {
    container.addEventListener('mouseenter', () => cancelAnimationFrame(rafId));
    container.addEventListener('mouseleave', () => { rafId = requestAnimationFrame(step); });
  }

  // mobile touch pause
  container.addEventListener('touchstart', () => cancelAnimationFrame(rafId), { passive: true });
  container.addEventListener('touchend', () => { rafId = requestAnimationFrame(step); });

  // detecta item central e aplica classes
  function updateActiveByCenter() {
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;

    // percorre apenas os itens visíveis (allItems) e calcula distância ao centro
    let minDist = Infinity;
    let closest = null;
    // porém queremos mapear indices ao conjunto original, para indicadores
    let originalIndexOfClosest = 0;

    allItems.forEach((it, idx) => {
      const rect = it.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const dist = Math.abs(centerX - itemCenter);

      if (dist < minDist) {
        minDist = dist;
        closest = it;
        // map para índice original
        originalIndexOfClosest = idx % items.length;
      }
    });

    // classes
    allItems.forEach(it => {
      it.classList.remove('active');
      it.classList.add('inactive');
    });
    if (closest) {
      closest.classList.remove('inactive');
      closest.classList.add('active');
    }

    // atualiza indicadores
    if (indicatorsWrap) {
      const dots = Array.from(indicatorsWrap.children);
      dots.forEach(d => d.classList.remove('active'));
      if (dots[originalIndexOfClosest]) dots[originalIndexOfClosest].classList.add('active');
    }
  }

  // centralizar item por índice original (quando clicar no indicador)
  function centerOnIndex(index) {
    // queremos que o primeiro item do conjunto original com esse índice fique centralizado
    // encontramos a posição do primeiro matching item (pode estar no clone também)
    const target = allItems.find((el, i) => i % items.length === index);
    if (!target) return;

    // posição do centro do container
    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    // calcula novo scrollLeft para centralizar target
    const offset = (targetRect.left + targetRect.width/2) - (containerRect.left + containerRect.width/2);
    // atualiza scrollPos e container.scrollLeft
    scrollPos += offset;
    container.scrollLeft = scrollPos;
    // aplica atualização imediata de destaque
    updateActiveByCenter();
  }

  // click abre o modal (usa sua função abrirModal(imgSrc, title))
  allItems.forEach(it => {
    it.addEventListener('click', (e) => {
      // pega img src e title
      const img = it.querySelector('img');
      const title = it.dataset.title || (it.querySelector('.item-label')?.textContent || '');
      if (img && window.abrirModal) {
        // pausa o autoplay ao abrir modal
        cancelAnimationFrame(rafId);
        window.abrirModal(img.src, title);
        // retoma depois de um pequeno delay (ou melhor: retome quando modal fechar chamando this script)
        setTimeout(() => { rafId = requestAnimationFrame(step); }, 1000);
      }
    });
  });

  // atualiza destaque logo ao carregar
  updateActiveByCenter();

  // adapta velocidade conforme tamanho de tela
  function adaptSpeed() {
    if (window.innerWidth >= 1400) speed = 0.9;
    else if (window.innerWidth >= 1000) speed = 0.8;
    else if (window.innerWidth >= 700) speed = 0.6;
    else speed = 0.45;
  }
  adaptSpeed();
  window.addEventListener('resize', adaptSpeed);
});
