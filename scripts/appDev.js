
// Objeto contendo textos de cada ano da trajetoria do charlie
// Estão organizado por ordem cronologica
const textos = [
	{
		year: 1999,
		title: `Repercussão comercial`,
		text: `Em 1999, após a estreia promissora, o grupo voltou com Preço Curto... 
		Prazo Longo, composto por 25 canções inéditas, entre elas "Confisco", 
		"Zóio de Lula", "O Preço" e "Não Deixe o Mar te Engolir", que sedimentaram a boa recepção da 
		banda e garantiram sua presença nas rádios. De 1999 a 2006, a canção "Te Levar" foi tema do 
		seriado Malhação, da Rede Globo, fazendo com que a banda expusesse seu trabalho às mais diferentes
		classes sociais. Com sua propagação na mídia, o grupo ganhou vários prêmios e chegou assim, 
		por várias vezes, ao topo de grandes rádios espalhadas pelo país. Pouco antes de entrar no 
		estúdio para gravar o terceiro álbum, a banda passou por uma forte crise interna, causada pelas
		brigas entre Chorão e Champignon, que quase encerrou o grupo.`
	},
	{
		year: 2003,
		title: `Álbum acústico`,
		text: `Em 2003, chegou a vez do Charlie Brown Jr. gravar seu Acústico MTV. Entre os convidados, o grupo chamou Negra Li, Marcelo Nova e Marcelo D2, que participaram de versões de "Não é Sério" , "Hoje" (do grupo de Nova, Camisa de Vênus) e de "Samba Makossa" (Nação Zumbi), respectivamente. Entre as regravações, a banda santista optou pelas canções "Proibida pra Mim", "Zóio de Lula", "Tudo que Ela Gosta de Escutar". O primeiro single foi a canção inédita "Vícios e Virtudes". O disco foi marcado pelo grande sucesso de vendas e mídia e, curiosamente, foi gravado enquanto a banda estava no auge da carreira, contrariando a tradição de retomar ao auge carreiras de outros artistas.`
	},
	{
		year: 2005,
		title: `Nova formação`,
		text: `No início de 2005, o vocalista Chorão foi surpreendido com o anúncio de que todos os outros músicos da banda estavam deixando o grupo, alegando divergências contratuais. Contrariando as expectativas, Chorão apareceu com uma nova formação para o Charlie Brown Jr. O novo núcleo era baseado na cidade de Santos, onde a banda surgiu. Thiago Castanho, guitarrista que fez parte dos três primeiros discos da banda, retornou ao grupo. Dois novos músicos assumiram, respectivamente, a bateria e o baixo; André Luís Ruas, conhecido como Pinguim; e Heitor Gomes, filho do contra-baixista Chico Gomes.`
	},
	{
		year: 2007,
		title: `Ritmo, Ritual e Responsa`,
		text: `O nono álbum da carreira lançado pelo Charlie Brown Jr. foi intitulado de Ritmo, Ritual e Responsa. Trouxe 22 faixas inéditas e uma faixa bônus, e chegou às lojas no final de setembro de 2007. Produzido por Chorão e Thiago Castanho, possui letras com forte apelo urbano e que vão ao encontro dos anseios da juventude, com direito a toques eletrônicos e a presença do rap. No dia 9 de abril de 2007 chegou às rádios do Brasil "Não Viva Em Vão", canção de Chorão e Thiago Castanho que foi escolhida como primeira música de trabalho. Logo em seguida é lançado o segundo, "Pontes Indestrutíveis", e posteirormente outra, a canção "Be Myself", que foi escolhida para fazer parte da trilha sonora da telenovela Duas Caras, exibida pela Rede Globo. Destaque também para o quarto single do álbum, "Uma Criança com Seu Olhar".`
	},
	{
		year: 2008,
		title: `Saída de Pinguim e Camisa 10 (Joga Bola até na Chuva)`,
		text: `No dia 23 de abril de 2008, foi divulgado no site oficial que o baterista André Ruas, o Pinguim, não fazia mais parte da banda. O motivo seria o fim do contrato que já estava se aproximando, sem que houvesse interesse de ambas as partes em renová-lo.`
	},
	{
		year: 2011,
		title: `Rompimento com a Sony, a volta de Marcão e Champignon e a saída de Heitor Gomes`,
		text: `No início de 2011, a banda gravou um CD e DVD ao vivo em São Paulo. Problemas na organização do evento levaram a um rompimento com a gravadora Sony Music, e a banda passou a trabalhar de forma independente.`
	},
	{
		year: 0,
		title: `Nova briga com Champignon`,
		text: `Durante um show da turnê em Apucarana, no Paraná, Chorão criticou o baixista, afirmando que ele deveria ser muito grato por ter sido aceito de volta ao grupo "depois de tudo que fez"[19]. Após quase cinco minutos, Champignon deixou o palco quando Chorão disse que ia tocar a canção "O preço". O show continuou sem o baixista, e com a plateia gritando "arregou, arregou". A briga virou notícia após um fã, que gravou todo o discurso de Chorão, divulgar o vídeo com a discussão no YouTube[20]. Com a repercussão negativa da briga, Chorão e Champignon divulgaram um vídeo no Youtube pedindo desculpas aos fãs, e reafirmando suas amizades.`
	},
	{
		year: 0,
		title: `Morte de Chorão`,
		text: `Na madrugada do dia 6 de março de 2013, o vocalista do Charlie Brown Jr., Chorão, foi encontrado morto em seu apartamento, localizado na zona oeste da cidade de São Paulo. A banda estava de férias, com seu último show tendo sido em janeiro em Camboriú,[24] e o próximo show programado marcado para o dia 22 de março, em Campo Grande, no Rio de Janeiro. "Íamos voltar a tocar no dia 22, mas isso não vai mais acontecer". Champignon declarou que o futuro da banda era incerto.`
	},
	{
		year: 0,
		title: `Fim do Charlie Brown Jr. e A Banca`,
		text: `Em março Champignon já declarara que não havia como o Charlie Brown Jr. continuar em atividade com a ausência de Chorão, e em abril o baixista confirmou que os integrantes sobreviventes iriam formar uma nova banda, A Banca, onde Champignon assumiria os vocais, com a entrada da baixista Lena Papini. O nome vinha da conclusão de Chorão que "a gente não era o Charlie Brown, nós éramos a banca do Charlie Brown.", enquanto seu papel como vocalista vinha de uma sugestão do próprio Chorão, que no começo de 2013 manifestou exaustão à Champignon, declarando que gostaria de ver o baixista assumindo os vocais do Charlie Brown Jr. durante suas férias para que pudesse descansar.`
	},
	{
		year: 2013,
		title: `Álbum Póstumo "La Família 013`,
		text: `La Família 013 foi o 10° álbum de estúdio, e o 12° álbum da banda, lançado em 8 de outubro de 2013 pela Som Livre,[38] após seu lançamento inicial em setembro ser adiado pela morte de Champignon. O disco vazou antes do lançamento no site de streaming Deezer.[39] Segundo comunicado da banda, o nome do álbum tem a ver com o DDD da cidade de Santos, que é 013. Com as mortes de Chorão e Champignon o álbum ganhou bastante notoriedade no cenário nacional, o álbum conta com os singles intitulados "Meu Novo Mundo" e "Um Dia a Gente Se Encontra".`
	},
	{
		year: 2014,
		title: `Festival "Tâmo Aí Na Atividade"`,
		text: `Em 2014, o filho de Chorão, Alexandre Abrão, organizou o Festival “Tâmo Aí Na Atividade” (batizado em homenagem ao nome de um dos discos da banda), realizado na cidade de São Bernardo do Campo, no Estância Alto da Serra, para homenagear o legado do Charlie Brown Jr.[41]. O evento, que recebeu uma atração internacional, além de atividades como grafite e uma pista de skate, foi realizado em 13 de abril, 4 dias depois do que seria o 44° aniversário de Chorão, e o 22° aniversário da primeira apresentação do Charlie Brown. A atração principal foi o show CBJr. e Convidados que reúniu no palco, pela primeira vez após a morte de Chorão e Champignon, ex-membros do CBJr. (guitarristas Marcão e Thiago Castanho, o baterista Bruno Graveto, e o baixista Heitor), além da baixista d'A Banca, Lena Papini, e diversos músicos convidados. Apesar de Alexandre querer lançar o show em DVD, razões burocráticas impediram as filmagens.`,
	}
];
