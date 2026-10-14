// Fonte: Planos de Governo registrados no TSE (eleições 2026).
// Textos resumidos e neutralizados (sem nomes de programas, partidos ou pessoas)
// para que o visitante não identifique o autor da proposta.
const CANDIDATOS = {
  lula: { nome: "Lula", nomeCompleto: "Luiz Inácio Lula da Silva", cor: "#c2410c" },
  flavio: { nome: "Flávio Bolsonaro", nomeCompleto: "Flávio Bolsonaro", cor: "#1d4ed8" },
};

const TEMAS = [
  {
    tema: "Segurança pública",
    flavio: [
      "Declarar facções e milícias como organizações narcoterroristas e bloquear seus ativos.",
      "Reduzir a maioridade penal para 16 anos e punir maiores de 14 anos por crimes graves.",
      "Construir 5 presídios federais de segurança máxima, criar 500 mil vagas prisionais em 4 anos e acabar com a progressão de regime para crimes hediondos.",
      "Castração química para estupradores e abusadores de crianças condenados; rede nacional de reconhecimento facial com mais de 1 milhão de câmeras.",
    ],
    lula: [
      "Criar o Ministério da Segurança Pública após aprovar emenda constitucional que redefine o papel da União, estados e municípios.",
      "Seguir com a asfixia financeira do crime organizado e ampliar as forças-tarefa integradas com os estados.",
      "Manter o controle de armas e munições e reforçar a fiscalização sobre colecionadores, atiradores, caçadores e segurança privada.",
      "Ampliar câmeras corporais nos policiais, policiamento de proximidade e programas de prevenção da violência voltados à juventude.",
    ],
  },
  {
    tema: "Proteção e autonomia das mulheres",
    flavio: [
      "Abrir centrais físicas e itinerantes que reúnam proteção, orientação jurídica, saúde, emprego e crédito, com aplicativo e assistente virtual 24h.",
      "Monitorar por tornozeleira eletrônica os agressores com medida protetiva e exigir cumprimento integral da pena de quem agride ou mata mulheres.",
      "Oferecer pacotes de internet e cursos gratuitos de capacitação (IA, programação, finanças, idiomas).",
      "Criar programa de pontos que transforma bons hábitos (estudar, poupar, pagar em dia) em juros menores e cashback.",
    ],
    lula: [
      "Concluir 30 centros integrados de atendimento à mulher vítima de violência e 15 centros de referência; distribuir kits de monitoramento de agressores aos estados.",
      "Manter o pacto entre os três Poderes contra o feminicídio.",
      "Tornar obrigatórios planos de ação nas empresas com desigualdade salarial entre homens e mulheres.",
      "Garantir direitos sexuais e reprodutivos, com contraceptivos de longa duração e absorventes gratuitos pelo SUS.",
    ],
  },
  {
    tema: "Educação básica",
    flavio: [
      "Alfabetizar pelo método fônico e pagar alunos de bom desempenho para dar reforço aos colegas.",
      "Ampliar as escolas cívico-militares e garantir uma escola livre de doutrinação político-partidária.",
      "Vincular repasses de verbas a metas de aprendizagem.",
      "Dar voucher para escola privada quando faltar vaga na rede pública e manter escolas abertas nas férias.",
    ],
    lula: [
      "Chegar a 80% das crianças alfabetizadas na idade certa, em cooperação com estados e municípios.",
      "Dar prioridade absoluta à escola em tempo integral e ampliar a construção de creches.",
      "Manter o piso nacional dos professores e bolsas para atrair e fixar docentes.",
      "Manter a poupança para estudantes de baixa renda do ensino médio não abandonarem a escola e universalizar internet nas escolas.",
    ],
  },
  {
    tema: "Ensino técnico e superior",
    flavio: [
      "Ampliar o ensino técnico no ensino médio em parceria com empresas, que poderão custear bolsas.",
      "Transferir o ensino superior para o Ministério da Ciência e Tecnologia e direcionar a pesquisa para impacto produtivo.",
      "Trocar o financiamento estudantil por empréstimo pago só depois do emprego, com parcela proporcional à renda.",
    ],
    lula: [
      "Expandir a rede federal de educação técnica (mais 111 unidades), priorizando interior e periferias.",
      "Novo ciclo de expansão e interiorização das universidades públicas.",
      "Ampliar a assistência estudantil (alimentação e moradia) e manter cursinhos populares gratuitos e cotas.",
    ],
  },
  {
    tema: "Saúde",
    flavio: [
      "Prontuário eletrônico único ligado ao CPF, integrando redes pública e privada, e uso de IA para agendar consultas.",
      "Corrigir a tabela de pagamentos do SUS para cobrir o custo real de hospitais e santas casas.",
      "Contratar exames na rede privada nos horários ociosos e entregar remédios em casa para idosos e doentes crônicos.",
      "Telessaúde para médicos de regiões com pouca demanda atenderem onde as filas são longas.",
    ],
    lula: [
      "Ampliar mutirões, terceiro turno e carretas da saúde para zerar filas de especialistas, com hospitais privados atendendo em troca de créditos.",
      "Manter a farmácia popular 100% gratuita e incluir exames para doenças crônicas.",
      "Fila única digital ordenada por risco clínico, com IA, e prontuário único do cidadão.",
      "Mais médicos em áreas vulneráveis, saúde bucal universal e a maior rede pública de tratamento de câncer do mundo.",
    ],
  },
  {
    tema: "Contas públicas e juros",
    flavio: [
      "Criar nova regra fiscal focada em estabilizar e depois reduzir a dívida pública, com superávits primários.",
      "Regra clara de limite para os gastos discricionários dos três Poderes.",
      "Limitar o crédito subsidiado com dinheiro do Tesouro.",
      "Juros caem como consequência das contas em ordem.",
    ],
    lula: [
      "Manter a regra fiscal atual, que controla despesas sem cortar políticas sociais.",
      "Buscar o equilíbrio com crescimento econômico, gasto mais eficiente e corte de privilégios e benefícios fiscais.",
      "Criar condições para queda sustentada dos juros, com inflação controlada.",
      "Fortalecer o mercado de capitais e os fundos garantidores de crédito.",
    ],
  },
  {
    tema: "Impostos",
    flavio: [
      "Revisar a reforma tributária aprovada para reduzir o novo imposto sobre consumo, projetado entre os maiores do mundo.",
      "Reverter aumentos de impostos recentes e reduzir a carga sobre produção e consumo.",
      "Reduzir exceções e desonerar exportações e investimentos.",
      "Reduzir impostos sobre energia elétrica e combustíveis.",
    ],
    lula: [
      "Implementar a reforma tributária do consumo: 5 tributos viram 2, cesta básica isenta e devolução de imposto aos mais pobres.",
      "Manter a isenção do Imposto de Renda até R$ 5 mil, com mais tributação sobre os super-ricos.",
      "Usar um imposto seletivo para desestimular produtos nocivos à saúde.",
      "Fundo de desenvolvimento regional no lugar da guerra fiscal entre estados.",
    ],
  },
  {
    tema: "Programas sociais e desigualdade",
    flavio: [
      "Manter os programas sociais, com combate a fraudes e correção de distorções.",
      "Dar prioridade aos beneficiários em vagas de primeiro emprego, qualificação e intermediação de trabalho.",
      "Garantir retorno imediato ao benefício se o emprego não der certo.",
      "Proibir o uso de dinheiro de programas sociais em apostas online.",
    ],
    lula: [
      "Manter e ampliar a transferência de renda, com benefícios extras para crianças e adolescentes.",
      "Manter aumento real do salário mínimo todos os anos.",
      "Colocar o combate ao racismo no centro da estratégia de desenvolvimento, com políticas para negros, indígenas, quilombolas e LGBTQIAP+.",
      "Política Nacional de Cuidados: espaços para crianças, lavanderias públicas, cozinhas solidárias e restaurantes populares.",
    ],
  },
  {
    tema: "Trabalho e emprego",
    flavio: [
      "Reduzir gradualmente o custo de contratar com carteira assinada, sem retirar direitos.",
      "Contrato mais barato para jovens de 18 a 24 anos no primeiro emprego e para pessoas acima de 50 anos desempregadas há 1 ano.",
      "Prevalência do negociado sobre o legislado e jornada flexível.",
      "Preservar o trabalho por aplicativos sem dirigentes sindicais à frente das regras; banco nacional de vagas ligado ao RH das empresas.",
    ],
    lula: [
      "Acabar com a escala 6x1 e reduzir a jornada para 40 horas semanais sem redução de salário.",
      "Regulamentar o trabalho por aplicativos, com regras de remuneração, direitos e previdência.",
      "Combater a 'pejotização' e terceirizações fraudulentas e retomar a assistência sindical nas rescisões.",
      "Fortalecer a negociação coletiva e os sindicatos; plataforma pública de empregos com IA.",
    ],
  },
  {
    tema: "Aposentados e Previdência",
    flavio: [
      "Lançar pacote antifraude na Previdência, com revalidação dos descontos nos benefícios.",
      "Mudar as regras do crédito consignado, com dupla checagem para evitar descontos não autorizados.",
      "Digitalizar o INSS e trocar a gestão por uma gestão profissional medida pelo tempo de espera do aposentado.",
    ],
    lula: [
      "Concluir a modernização do INSS e reduzir filas, avisando o trabalhador em casa quando ele tiver direito.",
      "Diversificar as fontes de financiamento da Previdência e criar contribuição flexível para quem tem trabalho intermitente.",
      "Incluir os trabalhadores de aplicativos na Previdência.",
    ],
  },
  {
    tema: "Moradia, saneamento e cidades",
    flavio: [
      "Retomar programa habitacional com meta de 2,5 milhões de moradias e os menores juros possíveis.",
      "Regularizar imóveis com escritura, de preferência no nome da mulher, e urbanizar áreas de risco.",
      "Acelerar concessões e parcerias privadas para universalizar água e esgoto até 2033.",
      "Retomar territórios dominados por facções, acabar com os lixões e não ter nenhuma escola sem água até 2030.",
    ],
    lula: [
      "Manter e ampliar o programa habitacional para todas as faixas de renda, com foco na baixa renda e uso de imóveis da União em áreas centrais.",
      "Urbanizar favelas e periferias com novas rodadas de investimento.",
      "Investir em metrôs, trens, VLTs, corredores de ônibus e ônibus elétricos.",
      "Obras de contenção de encostas e drenagem para adaptar as cidades às mudanças climáticas.",
    ],
  },
  {
    tema: "Agro e campo",
    flavio: [
      "Ampliar o seguro rural e renegociar as dívidas do setor.",
      "Segurança jurídica sólida e irreversível do direito de propriedade e titulação rápida do pequeno produtor.",
      "Simplificar outorgas de irrigação (hoje levam 24 meses) e ampliar a área irrigada.",
      "Produzir fertilizantes no Brasil com potássio e fosfato nacionais e ampliar armazéns de safra.",
    ],
    lula: [
      "Expandir o crédito à agricultura familiar, priorizando alimentos da cesta básica, agroecologia e orgânicos.",
      "Seguir com a reforma agrária, assentando famílias acampadas, e titular territórios quilombolas.",
      "Ampliar compras públicas de alimentos da agricultura familiar e alimentação escolar saudável.",
      "Programa de resiliência climática no campo, recuperação de pastagens e produção nacional de fertilizantes.",
    ],
  },
  {
    tema: "Energia e combustíveis",
    flavio: [
      "Permitir a exploração de gás não convencional (fracking) com responsabilidade ambiental.",
      "Reduzir gradualmente encargos e subsídios cruzados na conta de luz, mantendo a tarifa social.",
      "Expandir gasodutos com investimento privado e transformar o país em polo de data centers.",
      "Tornar o Brasil potência em biocombustíveis e vender créditos de carbono ao exterior.",
    ],
    lula: [
      "Petrobras volta a distribuir combustíveis, amplia refino e exploração, com conteúdo local na indústria naval.",
      "Evitar repassar ao consumidor os choques de preço internacionais dos combustíveis.",
      "Ampliar renováveis, baterias e hidrogênio de baixo carbono e reduzir o uso de carvão.",
      "Manter conta de luz gratuita para famílias de baixa renda que consomem até 80 kWh e botijão de gás gratuito.",
    ],
  },
  {
    tema: "Meio ambiente e clima",
    flavio: [
      "Zerar o desmatamento ilegal até 2029.",
      "Fiscalização mirando crime organizado e grileiros, sem tratar produtor rural e morador da floresta como suspeitos.",
      "Eliminar sobreposições entre órgãos ambientais e indigenistas e exigir transparência de ONGs com dinheiro estrangeiro.",
      "Licenciamento com prazo definido: se o órgão não decidir a tempo, a licença é concedida.",
    ],
    lula: [
      "Desmatamento líquido zero até 2030 e corte de 59% a 67% das emissões até 2035.",
      "Destinar terras públicas a unidades de conservação, terras indígenas, quilombos e assentamentos.",
      "Ampliar fundos de financiamento climático e o fundo global para florestas tropicais.",
      "Ampliar castração e cadastro de cães e gatos e endurecer penas por maus-tratos a animais.",
    ],
  },
  {
    tema: "Povos indígenas e comunidades tradicionais",
    flavio: [
      "Dar autonomia a indígenas e quilombolas para decidir sobre atividades produtivas em suas terras, com indenização por restrições de uso.",
      "Tratar ribeirinhos e extrativistas como parceiros, com orientação e regularização em vez de punição.",
      "Regras claras e estáveis para atividades econômicas em terras tradicionais.",
    ],
    lula: [
      "Demarcar terras indígenas e retirar invasores sempre que necessário.",
      "Implantar plenamente a Universidade Indígena e a educação escolar indígena intercultural.",
      "Acelerar a titulação dos territórios quilombolas, com políticas de desenvolvimento.",
    ],
  },
  {
    tema: "Infraestrutura e logística",
    flavio: [
      "Investir R$ 900 bilhões em 4 anos em rodovias, ferrovias, portos e aeroportos, apoiado em concessões e parcerias privadas.",
      "Fundo de financiamento lastreado em imóveis da União; banco de desenvolvimento só financia obras no Brasil.",
      "Destravar ferrovia de escoamento de grãos, ampliar a ferrovia transnordestina e criar trem de passageiros entre capitais do Nordeste.",
      "Garantir estabilidade de regras por até 20 anos para grandes projetos.",
    ],
    lula: [
      "Nova edição do plano federal de investimentos, combinando obras públicas e concessões.",
      "Intensificar concessões de ferrovias, investir em aeroportos regionais e novas rotas aéreas.",
      "Priorizar obras com maior potencial de reduzir desigualdades regionais e emissões.",
      "Transformar o Nordeste em polo de indústrias movidas a energia renovável (hidrogênio, aço verde, fertilizantes).",
    ],
  },
  {
    tema: "Tecnologia e governo digital",
    flavio: [
      "Digitalizar 100% dos serviços federais e não exigir documentos que o governo já tem.",
      "Assistentes de IA que indicam a cada cidadão os serviços e benefícios a que tem direito.",
      "Lei de liberdade para criar e inovar, para não frear o desenvolvimento de tecnologia.",
      "Pacotes de internet para quem não tem conexão.",
    ],
    lula: [
      "Soberania digital: supercomputadores nacionais e modelos de IA em português desenvolvidos no país.",
      "Data centers com contrapartidas: energia renovável e capacidade para o mercado interno.",
      "Centro nacional de transparência de algoritmos e rastreabilidade de conteúdo gerado por IA.",
      "Levar fibra óptica a onde falta e 5G ao campo.",
    ],
  },
  {
    tema: "Democracia, Judiciário e liberdade de expressão",
    flavio: [
      "Limitar decisões individuais de ministros do STF e retirar do STF o julgamento criminal de parlamentares.",
      "Quarentena de 1 ano para ministro de Estado ser indicado ao STF.",
      "Acabar com a reeleição para presidente.",
      "Extinguir estruturas do governo que classifiquem conteúdos como desinformação e revogar atos contra críticos do governo.",
    ],
    lula: [
      "Regular redes sociais e plataformas digitais para impedir desinformação e campanhas de ódio.",
      "Reforma política para aproximar a representação da composição real da sociedade.",
      "Debater com a sociedade o modelo de emendas parlamentares, que consome cerca de 1/5 do orçamento livre.",
      "Ampliar a participação social: conselhos, conferências e orçamento participativo.",
    ],
  },
  {
    tema: "Tamanho e gestão do Estado",
    flavio: [
      "Cortar no mínimo 10 ministérios, cargos comissionados, penduricalhos e supersalários.",
      "Reforma administrativa e revisão ampla de normas que travam a economia.",
      "Retomar o programa de privatizações, avaliando caso a caso.",
      "Blindar estatais e fundos de pensão de indicação política, com recrutamento por regras de mercado.",
    ],
    lula: [
      "Valorizar servidores com mesa permanente de negociação.",
      "Usar o poder de compra do Estado para induzir desenvolvimento, inovação e sustentabilidade.",
      "Destinar imóveis da União a moradia e serviços públicos.",
      "Portal da Transparência com IA e plano de integridade contra a corrupção.",
    ],
  },
  {
    tema: "Política externa e defesa",
    flavio: [
      "Diplomacia pragmática, 'sem ideologia', reaproximando o Brasil de EUA, Argentina e Israel.",
      "Retomar a adesão à OCDE e preparar abertura comercial.",
      "Negociar com todos os parceiros (China, União Europeia, EUA, Ásia) com foco no produtor brasileiro.",
      "Forças Armadas com foco em drones, IA e combate ao crime organizado.",
    ],
    lula: [
      "Prioridade à integração sul-americana e ao Mercosul; aproximação com África e Sul Global.",
      "Fortalecer o BRICS e defender reforma da ONU, do FMI e do Banco Mundial.",
      "Indústria de defesa nacional com autonomia tecnológica (caças, fragatas, blindados).",
      "Firme oposição a qualquer subordinação a interesses estrangeiros.",
    ],
  },
  {
    tema: "Cultura e esporte",
    flavio: [
      "Rever leis de incentivo para alcançar artistas de pouca projeção e outras regiões, sem subordinar a arte a agendas políticas.",
      "Preservar centros históricos e patrimônio cultural.",
      "Esporte competitivo nas escolas e patrocínio privado ao alto rendimento.",
      "Categoria feminina disputada apenas por atletas do sexo feminino de nascimento.",
    ],
    lula: [
      "Aperfeiçoar leis de incentivo com desconcentração regional e fortalecer pontos de cultura comunitários.",
      "Regular streaming e IA para que artistas sejam pagos pelo uso de conteúdo brasileiro.",
      "Ampliar a bolsa para atletas, manter patrocínio de estatais e implantar uma universidade do esporte.",
      "Arenas esportivas em todos os estados e sediar a Copa do Mundo de Futebol Feminino.",
    ],
  },
  {
    tema: "Idosos, pessoas com deficiência e cuidado",
    flavio: [
      "Subsídio para adaptar casas de idosos de baixa renda e aplicativo de companhia com alertas de perigo.",
      "Ampliar instituições de longa permanência e criar centros de referência em autismo.",
      "Voucher-creche na rede privada quando faltar vaga pública e rede de cuidado com centros-dia.",
      "Ampliar atenção à saúde mental: TDAH, depressão, ansiedade e Alzheimer.",
    ],
    lula: [
      "Atendimento domiciliar a idosos em todo o país e mais centros-dia.",
      "Mais centros de reabilitação e oficinas ortopédicas; fiscalizar cotas de contratação de pessoas com deficiência.",
      "Ampliar centros de atenção psicossocial, diagnóstico de autismo e atendimento a quem tem problemas com apostas.",
      "Capacitar cuidadores e criar espaços de acolhida para crianças de 3 a 12 anos.",
    ],
  },
];
