const categories = [
  { id: "popular", label: "Mais pedidos", desc: "Campeões de pedido para decidir rápido." },
  { id: "casa", label: "Pratos da casa", desc: "Receitas principais para almoço e jantar." },
  { id: "tapiocas", label: "Tapiocas", desc: "Opções leves, salgadas e doces." },
  { id: "combos", label: "Combos", desc: "Combinações para economizar e compartilhar." },
  { id: "sobremesas", label: "Sobremesas", desc: "Doces regionais para fechar o pedido." },
];

const products = [
  {
    id: "baiao",
    name: "Baião de Dois da Casa",
    desc: "Feijão verde, arroz soltinho, queijo coalho e carne de sol.",
    price: 38.9,
    time: "35 min",
    img: "./assets/baiao-de-dois.jpg",
    category: "casa",
    popular: true,
  },
  {
    id: "acaraje",
    name: "Acarajé no Prato",
    desc: "Bolinho crocante, vatapá, vinagrete e camarão seco à parte.",
    price: 34.9,
    time: "28 min",
    img: "./assets/acaraje.jpg",
    category: "casa",
    popular: true,
  },
  {
    id: "carne-sol-nata",
    name: "Carne de Sol na Nata",
    desc: "Carne de sol, nata cremosa, arroz de leite e farofa crocante.",
    price: 47.9,
    time: "38 min",
    img: "./assets/baiao-de-dois.jpg",
    category: "casa",
    popular: true,
  },
  {
    id: "escondidinho",
    name: "Escondidinho de Macaxeira",
    desc: "Purê de macaxeira, carne seca desfiada e queijo gratinado.",
    price: 41.9,
    time: "36 min",
    img: "./assets/baiao-de-dois.jpg",
    category: "casa",
    popular: false,
  },
  {
    id: "arrumadinho",
    name: "Arrumadinho de Feijão Verde",
    desc: "Feijão verde, vinagrete, farofa, charque e banana da terra.",
    price: 39.9,
    time: "33 min",
    img: "./assets/baiao-de-dois.jpg",
    category: "casa",
    popular: false,
  },
  {
    id: "peixe-coco",
    name: "Peixe ao Leite de Coco",
    desc: "Peixe grelhado, molho de coco, arroz e pirão leve.",
    price: 49.9,
    time: "40 min",
    img: "./assets/acaraje.jpg",
    category: "casa",
    popular: false,
  },
  {
    id: "tapioca-carne-seca",
    name: "Tapioca de Carne Seca",
    desc: "Goma fresca, carne seca cremosa, queijo coalho e cebola roxa.",
    price: 24.9,
    time: "18 min",
    img: "./assets/baiao-de-dois.jpg",
    category: "tapiocas",
    popular: true,
  },
  {
    id: "tapioca-coalho-mel",
    name: "Tapioca de Coalho e Mel",
    desc: "Queijo coalho tostado, mel de engenho e toque de canela.",
    price: 21.9,
    time: "16 min",
    img: "./assets/acaraje.jpg",
    category: "tapiocas",
    popular: false,
  },
  {
    id: "tapioca-cartola",
    name: "Tapioca Cartola",
    desc: "Banana, queijo manteiga, açúcar, canela e calda leve.",
    price: 23.9,
    time: "17 min",
    img: "./assets/acaraje.jpg",
    category: "tapiocas",
    popular: false,
  },
  {
    id: "tapioca-frango",
    name: "Tapioca de Frango Cremoso",
    desc: "Frango desfiado, requeijão, milho verde e cheiro-verde.",
    price: 22.9,
    time: "18 min",
    img: "./assets/baiao-de-dois.jpg",
    category: "tapiocas",
    popular: false,
  },
  {
    id: "combo-sertao",
    name: "Combo Sertão",
    desc: "Baião, macaxeira, dadinho de tapioca e suco da fruta.",
    price: 52.9,
    time: "42 min",
    img: "./assets/baiao-de-dois.jpg",
    category: "combos",
    popular: true,
  },
  {
    id: "combo-familia",
    name: "Combo Família Raízes",
    desc: "Dois pratos principais, duas tapiocas pequenas e sobremesa.",
    price: 118.9,
    time: "48 min",
    img: "./assets/baiao-de-dois.jpg",
    category: "combos",
    popular: false,
  },
  {
    id: "combo-executivo",
    name: "Combo Almoço Executivo",
    desc: "Prato da casa, bebida e sobremesa em porção individual.",
    price: 44.9,
    time: "32 min",
    img: "./assets/acaraje.jpg",
    category: "combos",
    popular: false,
  },
  {
    id: "combo-feira",
    name: "Combo Feira Livre",
    desc: "Petiscos, acarajé no prato e dois molhos para compartilhar.",
    price: 69.9,
    time: "35 min",
    img: "./assets/acaraje.jpg",
    category: "combos",
    popular: false,
  },
  {
    id: "cartola",
    name: "Cartola Pernambucana",
    desc: "Banana grelhada, queijo manteiga, açúcar e canela.",
    price: 19.9,
    time: "14 min",
    img: "./assets/acaraje.jpg",
    category: "sobremesas",
    popular: true,
  },
  {
    id: "cocada",
    name: "Cocada Cremosa",
    desc: "Coco fresco, calda de rapadura e castanha crocante.",
    price: 17.9,
    time: "12 min",
    img: "./assets/baiao-de-dois.jpg",
    category: "sobremesas",
    popular: false,
  },
  {
    id: "bolo-rolo",
    name: "Bolo de Rolo com Queijo",
    desc: "Fatias finas de goiabada com queijo coalho tostado.",
    price: 22.9,
    time: "15 min",
    img: "./assets/acaraje.jpg",
    category: "sobremesas",
    popular: false,
  },
  {
    id: "mungunza",
    name: "Mungunzá Doce",
    desc: "Milho branco, leite de coco, canela e amendoim torrado.",
    price: 18.9,
    time: "12 min",
    img: "./assets/baiao-de-dois.jpg",
    category: "sobremesas",
    popular: false,
  },
];

const initialCart = [
  { id: "baiao", qty: 1 },
  { id: "acaraje", qty: 1 },
];

const state = {
  screen: "home",
  category: "popular",
  consent: false,
  consentError: false,
  loginError: false,
  selectedProduct: products[0].id,
  selectedPayment: "card",
  cart: [...initialCart],
  coupon: true,
};

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function money(value) {
  return currency.format(value);
}

function productById(id) {
  return products.find((item) => item.id === id);
}

function categoryById(id) {
  return categories.find((item) => item.id === id) || categories[0];
}

function filteredProducts() {
  if (state.category === "popular") return products.filter((item) => item.popular);
  return products.filter((item) => item.category === state.category);
}

function cartItems() {
  return state.cart
    .map((item) => ({ ...productById(item.id), qty: item.qty }))
    .filter((item) => item.id);
}

function subtotal() {
  return cartItems().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function discount() {
  return state.coupon ? Math.min(subtotal() * 0.1, 8) : 0;
}

function total() {
  return Math.max(0, subtotal() + 6.9 - discount());
}

function setScreen(screen) {
  state.screen = screen;
  state.consentError = false;
  state.loginError = false;
  render();
  document.getElementById("app").focus({ preventScroll: true });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2300);
}

function addToCart(id) {
  const item = state.cart.find((entry) => entry.id === id);
  if (item) item.qty += 1;
  else state.cart.push({ id, qty: 1 });
  showToast("Prato adicionado ao carrinho.");
  render();
}

function changeQty(id, amount) {
  const item = state.cart.find((entry) => entry.id === id);
  if (!item) return;
  item.qty += amount;
  if (item.qty <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== id);
  }
  render();
}

function render() {
  document.getElementById("cartCount").textContent = String(
    state.cart.reduce((sum, item) => sum + item.qty, 0),
  );
  document.querySelectorAll(".nav-link").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.screen === normalizedNav(state.screen));
  });

  const app = document.getElementById("app");
  app.innerHTML = screens[state.screen]();
  bindLocalEvents(app);
}

function normalizedNav(screen) {
  if (["detail", "cart", "payment", "confirmation", "paymentError", "units", "promotions", "loyalty", "login"].includes(screen)) return "";
  return screen;
}

function sectionTitle(label, title, text) {
  return `
    <div class="screen-title">
      <p class="eyebrow">${label}</p>
      <h1>${title}</h1>
      <p>${text}</p>
    </div>`;
}

function productCard(product) {
  return `
    <article class="product-card">
      <button class="quiet-image" type="button" data-detail="${product.id}" aria-label="Abrir ${product.name}">
        <img src="${product.img}" alt="${product.name}" />
      </button>
      <div class="product-body">
        <div class="product-top">
          <div>
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
          </div>
          <span class="price">${money(product.price)}</span>
        </div>
        <div class="product-actions">
          <span class="tag">${categoryById(product.category).label}</span>
          <span class="tag">${product.time}</span>
          <button class="primary-btn" type="button" data-add="${product.id}">Adicionar</button>
        </div>
      </div>
    </article>`;
}

function categoryTabs() {
  return categories
    .map(
      (category) => `
        <button class="category-chip ${state.category === category.id ? "is-active" : ""}" type="button" data-category="${category.id}">
          ${category.label}
        </button>`,
    )
    .join("");
}

function summaryCard() {
  const hasCart = state.cart.length > 0;
  return `
    <aside class="summary-card" aria-label="Resumo do pedido">
      <h2>Resumo</h2>
      <div class="summary-line"><span>Itens</span><strong>${state.cart.reduce((sum, item) => sum + item.qty, 0)}</strong></div>
      <div class="summary-line"><span>Subtotal</span><strong>${money(subtotal())}</strong></div>
      <div class="summary-line"><span>Entrega</span><strong>${money(6.9)}</strong></div>
      <div class="summary-line"><span>Cupom ARRETADO10</span><strong>-${money(discount())}</strong></div>
      <div class="summary-total"><span>Total</span><strong>${money(total())}</strong></div>
      <div class="checkout-actions" style="margin-top: 22px">
        <button class="primary-btn" type="button" data-screen="${hasCart ? "payment" : "menu"}">
          ${hasCart ? "Ir para pagamento" : "Ver cardápio"}
        </button>
      </div>
    </aside>`;
}

const screens = {
  home() {
    return `
      <section class="hero-grid" id="inicio">
        <div class="hero-copy">
          <div>
            <p class="eyebrow">Recife Antigo aberto agora</p>
            <h1>Nordeste no prato, pedido sem enrolação.</h1>
            <p>Escolha pratos da casa, aplique seu cupom e finalize com privacidade clara do cadastro ao pagamento.</p>
          </div>
          <div class="hero-actions">
            <button class="primary-btn" type="button" data-screen="menu">Pedir agora</button>
            <button class="secondary-btn" type="button" data-screen="signup">Criar conta</button>
            <button class="secondary-btn" type="button" data-screen="units">Escolher unidade</button>
          </div>
        </div>

        <aside class="hero-panel">
          <div class="today-card">
            <div>
              <p class="eyebrow">Especial de hoje</p>
              <h2>Acarajé no prato</h2>
              <p>Vatapá cremoso, vinagrete fresco e molho de pimenta da casa.</p>
            </div>
          </div>
          <div class="metrics-row">
            <div class="metric"><strong>35</strong><span>minutos em média</span></div>
            <div class="metric"><strong>4.8</strong><span>avaliação dos clientes</span></div>
            <div class="metric"><strong>10%</strong><span>no cupom da semana</span></div>
          </div>
          <div class="location-card">
            <h3>Unidade Recife Antigo</h3>
            <p>Rua da Aurora, 128. Retirada no balcão ou entrega para bairros próximos.</p>
            <div class="button-row">
              <button class="secondary-btn" type="button" data-screen="menu">Ver pratos disponíveis</button>
              <button class="quiet-btn" type="button" data-screen="promotions">Promoções</button>
              <button class="quiet-btn" type="button" data-screen="loyalty">Clube Raízes</button>
            </div>
          </div>
        </aside>
      </section>

      <section>
        <div class="section-head">
          <div>
            <p class="eyebrow">Mais pedidos</p>
            <h2>Pratos que vendem no olho</h2>
          </div>
          <button class="quiet-btn" type="button" data-screen="menu">Abrir cardápio completo</button>
        </div>
        <div class="product-grid">
          ${products.filter((item) => item.popular).slice(0, 3).map(productCard).join("")}
        </div>
      </section>`;
  },

  menu() {
    const activeCategory = categoryById(state.category);
    const visibleProducts = filteredProducts();
    return `
      ${sectionTitle("Cardápio", "Escolha seu pedido", "Categorias, fotos e preços aparecem antes do carrinho, para reduzir atrito e aumentar conversão.")}
      <div class="section-head">
        <div class="category-row" aria-label="Categorias">
          ${categoryTabs()}
        </div>
        <p class="menu-count"><strong>${activeCategory.label}:</strong> ${activeCategory.desc} ${visibleProducts.length} opções disponíveis.</p>
      </div>
      <div class="screen-grid">
        <div class="product-grid">
          ${visibleProducts.map(productCard).join("")}
        </div>
        ${summaryCard()}
      </div>`;
  },

  detail() {
    const product = productById(state.selectedProduct);
    return `
      <div class="screen-grid">
        <article class="surface">
          <img src="${product.img}" alt="${product.name}" style="width: 100%; height: min(460px, 50vw); object-fit: cover; border-radius: 24px" />
          <div class="section-head">
            <div>
              <p class="eyebrow">Detalhe do prato</p>
              <h2>${product.name}</h2>
              <p>${product.desc} Tempo médio de preparo: ${product.time}.</p>
            </div>
            <span class="price" style="font-size: 1.4rem">${money(product.price)}</span>
          </div>
          <div class="category-row" aria-label="Acompanhamentos">
            <button class="tag is-hot" type="button" data-modifier="Queijo coalho">Queijo coalho</button>
            <button class="tag" type="button" data-modifier="Macaxeira">Macaxeira</button>
            <button class="tag" type="button" data-modifier="Molho de pimenta">Molho de pimenta</button>
            <button class="tag" type="button" data-modifier="Sem coentro">Sem coentro</button>
          </div>
          <div class="form-grid">
            <label class="field">
              <span>Observação para a cozinha</span>
              <textarea>Molho à parte, por favor.</textarea>
            </label>
          </div>
          <div class="button-row">
            <button class="primary-btn" type="button" data-add="${product.id}" data-next="cart">Adicionar ao carrinho</button>
            <button class="secondary-btn" type="button" data-screen="menu">Voltar ao cardápio</button>
          </div>
        </article>
        ${summaryCard()}
      </div>`;
  },

  signup() {
    return `
      <div class="screen-grid">
        <section class="form-card">
          ${sectionTitle("Conta", "Crie sua conta", "Dados mínimos para pedido, atendimento e benefícios de fidelidade.")}
          <div class="form-grid">
            <label class="field"><span>Nome completo</span><input value="Maria Clara" /></label>
            <label class="field"><span>E-mail</span><input value="maria.clara@email.com" /></label>
            <label class="field"><span>Telefone</span><input value="(81) 99999-1200" /></label>
            <label class="field"><span>Senha</span><input type="password" value="raizes123" /></label>
          </div>
          <button class="consent-box" type="button" data-consent>
            <span class="check ${state.consent ? "is-checked" : ""}">✓</span>
            <span>
              <strong>Autorizo o uso dos meus dados para criar conta e processar pedidos.</strong>
              <p>Você pode consultar, corrigir ou pedir exclusão dos seus dados na área de privacidade.</p>
            </span>
          </button>
          <div class="inline-alert ${state.consentError ? "is-visible" : ""}">
            Para continuar, confirme o consentimento de uso dos dados.
          </div>
          <div class="button-row" style="margin-top: 18px">
            <button class="primary-btn" type="button" data-submit-signup>Criar conta</button>
            <button class="secondary-btn" type="button" data-screen="login">Entrar</button>
            <button class="secondary-btn" type="button" data-screen="privacy">Ver privacidade</button>
          </div>
        </section>
        <aside class="summary-card">
          <h2>Benefícios</h2>
          <div class="summary-line"><span>Pontos por pedido</span><strong>1 ponto/R$</strong></div>
          <div class="summary-line"><span>Cupom de boas-vindas</span><strong>10%</strong></div>
          <div class="summary-line"><span>Pedidos favoritos</span><strong>Salvos</strong></div>
          <div class="summary-total"><span>Cadastro</span><strong>2 min</strong></div>
        </aside>
      </div>`;
  },

  login() {
    return `
      <div class="screen-grid">
        <section class="form-card">
          ${sectionTitle("Login", "Entre para repetir seu pedido", "Acesso para clientes cadastrados, com recuperação clara quando os dados não conferem.")}
          <div class="form-grid">
            <label class="field"><span>E-mail</span><input value="maria.clara@email.com" /></label>
            <label class="field"><span>Senha</span><input type="password" value="senha-incorreta" /></label>
          </div>
          <div class="inline-alert ${state.loginError ? "is-visible" : ""}">
            E-mail ou senha não conferem. Revise os dados ou recupere o acesso.
          </div>
          <div class="button-row" style="margin-top: 18px">
            <button class="primary-btn" type="button" data-login-error>Entrar</button>
            <button class="secondary-btn" type="button" data-screen="signup">Criar conta</button>
            <button class="quiet-btn" type="button" data-screen="privacy">Privacidade</button>
          </div>
        </section>
        <aside class="summary-card">
          <h2>Acesso rápido</h2>
          <div class="summary-line"><span>Pedido favorito</span><strong>Baião da Casa</strong></div>
          <div class="summary-line"><span>Pontos disponíveis</span><strong>184</strong></div>
          <div class="summary-line"><span>Cupom ativo</span><strong>ARRETADO10</strong></div>
          <div class="summary-total"><span>Retorno</span><strong>1 min</strong></div>
        </aside>
      </div>`;
  },

  units() {
    const units = [
      ["Recife Antigo", "Rua da Aurora, 128", "Retirada e entrega", "35 min"],
      ["Boa Viagem", "Av. Conselheiro Aguiar, 820", "Entrega ampliada", "42 min"],
      ["Olinda", "Rua do Amparo, 45", "Retirada no balcão", "28 min"],
    ];

    return `
      ${sectionTitle("Unidades", "Escolha onde seu pedido será preparado", "A unidade define prazo, disponibilidade de pratos, modalidade de retirada e taxa de entrega.")}
      <div class="privacy-grid">
        ${units
          .map(
            (unit, index) => `
              <article class="privacy-panel">
                <span class="tag ${index === 0 ? "is-hot" : ""}">${unit[3]}</span>
                <h3>${unit[0]}</h3>
                <p>${unit[1]}</p>
                <p>${unit[2]}</p>
                <button class="primary-btn" type="button" data-screen="menu" style="margin-top: 18px">Pedir nesta unidade</button>
              </article>`,
          )
          .join("")}
      </div>`;
  },

  promotions() {
    return `
      ${sectionTitle("Promoções", "Ofertas para decidir agora", "Cupons e combos entram antes do pagamento para aumentar clareza e reduzir abandono.")}
      <div class="product-grid">
        <article class="product-card">
          <div class="product-body">
            <span class="tag is-hot">Cupom da semana</span>
            <h3>ARRETADO10</h3>
            <p>10% de desconto em pedidos com prato principal e sobremesa.</p>
            <div class="product-actions">
              <span class="price">até R$ 8,00</span>
              <button class="primary-btn" type="button" data-apply-coupon>${state.coupon ? "Cupom aplicado" : "Aplicar cupom"}</button>
            </div>
          </div>
        </article>
        <article class="product-card">
          <div class="product-body">
            <span class="tag">Combo</span>
            <h3>Almoço Executivo</h3>
            <p>Prato da casa, bebida e sobremesa em porção individual.</p>
            <div class="product-actions">
              <span class="price">R$ 44,90</span>
              <button class="primary-btn" type="button" data-add="combo-executivo">Adicionar</button>
            </div>
          </div>
        </article>
        <article class="product-card">
          <div class="product-body">
            <span class="tag">Fidelidade</span>
            <h3>Troca de pontos</h3>
            <p>Use pontos do Clube Raízes para liberar sobremesa no próximo pedido.</p>
            <div class="product-actions">
              <span class="price">120 pontos</span>
              <button class="secondary-btn" type="button" data-screen="loyalty">Ver clube</button>
            </div>
          </div>
        </article>
      </div>`;
  },

  loyalty() {
    return `
      ${sectionTitle("Clube Raízes", "Pontos para voltar sem pensar duas vezes", "A experiência de fidelidade reforça recompra, pedidos favoritos e benefícios simples.")}
      <div class="screen-grid">
        <section class="surface">
          <div class="metrics-row">
            <div class="metric"><strong>184</strong><span>pontos disponíveis</span></div>
            <div class="metric"><strong>+91</strong><span>pontos neste pedido</span></div>
            <div class="metric"><strong>120</strong><span>pontos por sobremesa</span></div>
          </div>
          <div class="privacy-grid" style="margin-top: 22px">
            <article class="privacy-panel">
              <h3>Pedido favorito</h3>
              <p>Baião de Dois da Casa com molho à parte.</p>
            </article>
            <article class="privacy-panel">
              <h3>Próximo benefício</h3>
              <p>Cartola Pernambucana liberada na próxima compra.</p>
            </article>
            <article class="privacy-panel">
              <h3>Regra clara</h3>
              <p>1 ponto por real gasto em pedidos aprovados.</p>
            </article>
          </div>
        </section>
        ${summaryCard()}
      </div>`;
  },

  privacy() {
    return `
      ${sectionTitle("Privacidade", "Dados claros, pedido tranquilo", "A plataforma informa finalidade de uso e mantém atalhos para direitos do titular.")}
      <div class="privacy-grid">
        <article class="privacy-panel">
          <h3>Finalidade</h3>
          <p>Cadastro, entrega, pagamento, atendimento e benefícios de fidelidade.</p>
        </article>
        <article class="privacy-panel">
          <h3>Controle</h3>
          <p>O cliente pode solicitar acesso, correção ou exclusão dos dados da conta.</p>
        </article>
        <article class="privacy-panel">
          <h3>Segurança</h3>
          <p>Dados sensíveis de pagamento são tratados somente para finalizar a compra.</p>
        </article>
      </div>
      <div class="button-row" style="margin-top: 24px">
        <button class="primary-btn" type="button" data-screen="signup">Criar conta com consentimento</button>
        <button class="secondary-btn" type="button" data-screen="menu">Continuar como visitante</button>
      </div>`;
  },

  cart() {
    const items = cartItems();
    return `
      ${sectionTitle("Carrinho", "Revise antes de pagar", "Itens, cupom, endereço e total ficam juntos para evitar surpresa no fechamento.")}
      <div class="screen-grid">
        <section class="order-list">
          ${
            items.length
              ? items
                  .map(
                    (item) => `
                    <article class="order-card">
                      <img src="${item.img}" alt="${item.name}" />
                      <div>
                        <h3>${item.name}</h3>
                        <p>${money(item.price)} · ${item.time}</p>
                      </div>
                      <div class="qty-control" aria-label="Quantidade de ${item.name}">
                        <button type="button" data-qty="${item.id}" data-amount="-1">−</button>
                        <strong>${item.qty}</strong>
                        <button type="button" data-qty="${item.id}" data-amount="1">+</button>
                      </div>
                    </article>`,
                  )
                  .join("")
              : `<article class="status-card"><h1>Carrinho vazio</h1><p>Escolha um prato para começar seu pedido.</p><button class="primary-btn" type="button" data-screen="menu">Ver cardápio</button></article>`
          }
          <article class="form-card">
            <div class="form-grid">
              <label class="field"><span>Endereço de entrega</span><input value="Rua da Aurora, 128 - Recife Antigo" /></label>
              <label class="field"><span>Cupom</span><input value="${state.coupon ? "ARRETADO10" : ""}" /></label>
            </div>
            <button class="secondary-btn" type="button" data-toggle-coupon>${state.coupon ? "Remover cupom" : "Aplicar cupom"}</button>
          </article>
        </section>
        ${summaryCard()}
      </div>`;
  },

  payment() {
    return `
      <div class="screen-grid">
        <section class="form-card">
          ${sectionTitle("Pagamento", "Finalize com segurança", "Escolha a forma de pagamento e confirme o pedido da unidade Recife Antigo.")}
          <div class="payment-methods">
            ${paymentMethod("card", "Cartão final 1182", "Crédito · aprovado para compras online")}
            ${paymentMethod("pix", "Pix", "Código gerado após confirmação")}
            ${paymentMethod("store", "Pagar na retirada", "Disponível no balcão da unidade")}
          </div>
          <div class="form-grid">
            <label class="field"><span>Nome impresso no cartão</span><input value="Maria Clara" /></label>
            <label class="field"><span>CPF para nota</span><input value="123.456.789-00" /></label>
          </div>
          <div class="checkout-actions">
            <button class="primary-btn" type="button" data-screen="confirmation">Confirmar pedido</button>
            <button class="secondary-btn" type="button" data-screen="paymentError">Usar outra forma</button>
          </div>
        </section>
        ${summaryCard()}
      </div>`;
  },

  paymentError() {
    return `
      <section class="status-card">
        <div class="status-icon error">!</div>
        <div>
          <p class="eyebrow">Pagamento não aprovado</p>
          <h1>Não conseguimos finalizar com esta forma de pagamento.</h1>
          <p>Seu carrinho foi preservado. Escolha Pix, retirada no balcão ou tente outro cartão.</p>
        </div>
        <div class="button-row" style="justify-content: center">
          <button class="primary-btn" type="button" data-screen="payment">Tentar novamente</button>
          <button class="secondary-btn" type="button" data-screen="cart">Voltar ao carrinho</button>
        </div>
      </section>`;
  },

  confirmation() {
    return `
      <section class="status-card">
        <div class="status-icon">✓</div>
        <div>
          <p class="eyebrow">Pedido confirmado</p>
          <h1>Seu pedido já foi enviado para a cozinha.</h1>
          <p>Número 1842 · retirada prevista em 35 minutos na unidade Recife Antigo.</p>
        </div>
        <div class="metrics-row" style="max-width: 620px; margin: 0 auto; width: 100%">
          <div class="metric"><strong>${money(total())}</strong><span>Total pago</span></div>
          <div class="metric"><strong>35 min</strong><span>Previsão</span></div>
          <div class="metric"><strong>+91</strong><span>Pontos</span></div>
        </div>
        <div class="button-row" style="justify-content: center">
          <button class="primary-btn" type="button" data-screen="menu">Fazer novo pedido</button>
          <button class="secondary-btn" type="button" data-screen="home">Voltar ao início</button>
        </div>
      </section>`;
  },
};

function paymentMethod(id, title, subtitle) {
  return `
    <button class="payment-method ${state.selectedPayment === id ? "is-selected" : ""}" type="button" data-payment="${id}">
      <span><strong>${title}</strong><small>${subtitle}</small></span>
      <span class="check ${state.selectedPayment === id ? "is-checked" : ""}">✓</span>
    </button>`;
}

function bindLocalEvents(root) {
  root.querySelectorAll("[data-screen]").forEach((button) => {
    button.addEventListener("click", () => setScreen(button.dataset.screen));
  });

  root.querySelectorAll("[data-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedProduct = button.dataset.detail;
      setScreen("detail");
    });
  });

  root.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(button.dataset.add);
      if (button.dataset.next) setScreen(button.dataset.next);
    });
  });

  root.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      render();
    });
  });

  root.querySelectorAll("[data-modifier]").forEach((button) => {
    button.addEventListener("click", () => showToast(`${button.dataset.modifier} adicionado ao pedido.`));
  });

  root.querySelectorAll("[data-qty]").forEach((button) => {
    button.addEventListener("click", () => changeQty(button.dataset.qty, Number(button.dataset.amount)));
  });

  root.querySelectorAll("[data-payment]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedPayment = button.dataset.payment;
      render();
    });
  });

  const consentButton = root.querySelector("[data-consent]");
  if (consentButton) {
    consentButton.addEventListener("click", () => {
      state.consent = !state.consent;
      state.consentError = false;
      render();
    });
  }

  const signupButton = root.querySelector("[data-submit-signup]");
  if (signupButton) {
    signupButton.addEventListener("click", () => {
      if (!state.consent) {
        state.consentError = true;
        render();
        return;
      }
      setScreen("menu");
      showToast("Conta criada. Você já pode escolher seu pedido.");
    });
  }

  const loginButton = root.querySelector("[data-login-error]");
  if (loginButton) {
    loginButton.addEventListener("click", () => {
      state.loginError = true;
      render();
    });
  }

  const applyCouponButton = root.querySelector("[data-apply-coupon]");
  if (applyCouponButton) {
    applyCouponButton.addEventListener("click", () => {
      state.coupon = true;
      showToast("Cupom aplicado.");
      render();
    });
  }

  const couponButton = root.querySelector("[data-toggle-coupon]");
  if (couponButton) {
    couponButton.addEventListener("click", () => {
      state.coupon = !state.coupon;
      showToast(state.coupon ? "Cupom aplicado." : "Cupom removido.");
      render();
    });
  }
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-screen]");
  if (target && !document.getElementById("app").contains(target)) {
    event.preventDefault();
    setScreen(target.dataset.screen);
  }
});

const params = new URLSearchParams(window.location.search);
const initialScreen = params.get("screen");
if (initialScreen && screens[initialScreen]) {
  state.screen = initialScreen;
}

render();