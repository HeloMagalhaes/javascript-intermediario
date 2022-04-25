var pais //declaração
pais = "Brasil" // atribuição

var pais = 'Brasil' // apesar de parecer que tudo acontece na mesma linha, na prática ele é tratado como duas instruções declaradas, como acima.
//não importa aonde essas variaveis sao declaradas em um escopo, todas elas são içadas para o topo do escopo. Só a declaração é movida, a atribuição não é movida.
//não é movida visualmente.

//variaveis declaradas com let não podem lidam ou escritas até que tenham sido inicializadas, elas são inicializadas onde elas são declaradas no código, ela é içada mas não é atribuida com valor nenhum.
