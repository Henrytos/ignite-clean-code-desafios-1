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


# SOLID 
5 preceitos famosos na programação para elevar a escabilidade e desenvolvimento do nosso software

## S (single of responsibility principle)
principio nda responsabilidade unica , uma classe,função,modulo,arquivo... deve fazer somente uma coisa e deve cumnprir isso de forma perfeita 

    class GetOrderDiscount {
        execute(amount: number) {
            //altas coisinhas aqui
        }
    }

## O (open of closed responsibility principle)
principio de aberto e fechado , diz que uma uma classe,função,modulo,arquivo...deve estar ffechada para alteração e aberta para extenção

#### fechada para alteração
    interface PaymentMethod {
        getDiscount(amount: number): number;
    }

    class GetOrderDiscount {
        execute(
            amount: number, 
            paymentMethod: PaymentMethod) {
            return this.paymentMethod.getDiscount(amount);
        }
    }

#### aberto para extenção
    class PaymentByDebit implements PaymentMethod {
        getDiscount(amount: number) {
            return amount * 0.05;
        }
    }

    class PaymentByBillet implements PaymentMethod {
        getDiscount(amount: number) {
            return amount * 0.1;
        }
    }

#### execução:
    const getOrderDiscount = new GetOrderDiscount()

    getOrderDiscount.execute(1000, new PaymentByDebit())
    

## L (liskov substitution responsibility principle)
principio da substituição de classe diz que deve ser possivel alterar as denpendencias de uma determinada funcionalidade sem alterar seu resultado respeitando assim tambem o **O** do SOLID

#### exemplo
tendo em mente o código acima do open closed principal

    const getOrderDiscount = new GetOrderDiscount()

    getOrderDiscount.execute(1000, new PaymentByDebit())
    getOrderDiscount.execute(1000, new PaymentByBillet()) 

## I (interface segregation responsibility principle)
responsabilidade da segregação de interfaces diz que devemos dividir interface para melhor modularização de expectativas de certas interfaces, isso ajuda evitar campos opcionais 

#### exemplo
    interface PaymentMethod {
        getDiscount(amount: number): number;
    }

    interface PaymentCredit {
        number: number;
        expires: number;
        installments: number;
    }

    class PaymentByCredit implements PaymentMethod, PaymentCredit {}


## D (dependency inversion responsibility  principle)  
responsabilidade de inverção de dependencias diz que nossa :classe,função,modulo,arquivo...  deve ter suas dependecias inferidas na hora de execução , se conecta muito com **L**  e  **O** do SOLID

#### exemplo 

    class GetOrderDiscount {
        private paymentMethod: PaymentMethod;

        constructor(paymentMethod: PaymentMethod) {
            this.paymentMethod = paymentMethod;
        }

        execute(amount: number) {
            return this.paymentMethod.getDiscount(amount);
        }
    }