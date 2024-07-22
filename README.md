# PILARES DO CLEAN CODE

## LEGIBILIDADE 📝
Um código deve ser legível por outros programadores, como um livro. Nós somos os autores e nossa equipe são os leitores. Se o código não é legível, a equipe terá dificuldade para entender e dar manutenção.

![Clean Code](https://miro.medium.com/max/1400/0*W7BzYoBS7FzISQ8e.png)

## ESCALABILIDADE 📈
Para obter um software escalável, é essencial respeitar os princípios do Clean Code. Um código bem estruturado e organizado facilita o crescimento e a adaptação do software às novas necessidades.

![Scalability](https://www.investopedia.com/thmb/_7T0wrdfyZd_YGmGeVf5jY8ZbH4=/1000x1000/filters:no_upscale():max_bytes(150000):strip_icc()/Scalability_graph2-1-5bfc80b046e0fb002670058a.png)

## MANUTENIBILIDADE 🔧
Um código bonito e organizado de nada adianta se não for fácil de manter. Para alcançar esse estado, é preciso seguir os seguintes preceitos:

1. **Modularidade:** Divida o código em módulos independentes.
2. **Comentário e Documentação:** Documente funções e classes para facilitar a manutenção.
3. **Refatoração Regular:** Revise e melhore o código continuamente.

![Maintainability](https://miro.medium.com/max/1400/1*U4MKPboSE4ojm1Y6LTl_8w.png)

## CONFIABILIDADE ✅
O código precisa ser confiável para que outros programadores possam dar suporte a ele. Para isso, é importante seguir boas práticas de programação e garantir que o código esteja livre de bugs e vulnerabilidades.

![Reliability](https://www.softwaretestinghelp.com/wp-content/qa/uploads/2019/01/Quality-Assurance-Vs-Quality-Control.jpg)

## TESTABILIDADE 🧪
Para ajudar na manutenção e confiabilidade, é crucial desenvolver testes:

- **E2E (End-to-End):** Testa a aplicação de ponta a ponta.
- **INT (Integration):** Testa a integração entre diferentes partes do sistema.
- **UNIT:** Testa unidades individuais de código.

![Testing](https://blog.testlodge.com/wp-content/uploads/2018/08/types-of-software-testing.jpg)

## PREVISIBILIDADE 🔍
O código deve ser previsível e sem efeitos colaterais. Por exemplo, uma função que cria um usuário não deve, ao mesmo tempo, criar um token. Funções devem fazer uma única coisa e bem.

![Predictability](https://miro.medium.com/max/2000/1*iugf4EBSTwMjcV9UEOSghw.png)

# Clean Code no Código

## Nomenclatura de Variáveis 🏷️
- **Sempre em inglês**
- **Sempre descritiva**
- Explique por que existe, como usar e o que retorna.
- Classes são substantivos e funções são verbos.

### Exemplo:
Enviar notificação ao autor do post:
- **Classe:** `Author`
- **Função:** `SendNotificationToAuthorPost`

![Naming Variables](https://image.slidesharecdn.com/namingthings-190130230213/95/naming-things-3-638.jpg?cb=1548882058)

Seguindo esses pilares, garantimos que nosso código seja mais fácil de ler, manter e escalar, além de ser confiável e testável. A prática contínua dessas técnicas nos ajuda a nos tornarmos melhores desenvolvedores e a produzir software de alta qualidade.
