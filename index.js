/*
        Esse é o código JavaScript dessa página.
        */

        // Dados do usuário usando variáveis discretas.
        var name = 'Joca da Silva'
        var email = 'joca@silva.com'
        var birth = '2003-03-18'
        var cpf = '012.345.678-90'
        var address = 'Rua do Siri Molhado, 22'

        // Dados do ususário. Forma moderna!
        var user = {

            //Atributos do objeto "user". 
            name : 'Joca da Silva',
            email : 'joca@silva.com',
            birth : '2003-03-18',
            cpf : '012.345.678-90',
            address : 'Rua do Siri Molhado, 22',
            password:'12345',

            // Métodos do objeto "user".
            login: function() {
                
                // Recebe e armazena o e-mail do prompt.
                var userEmail = prompt('Digite seu e-mail')

                // Se o usuário não digitou nada.
                if(userEmail == "" || userEmail == null) {
                    alert("Email não informado.")

                    //Encerra a função retornando false.
                    return false
                } else if(userEmail != user.email) { 
                    alert('E-mail não cadastrado.')
                    return false 
                }
                    //Digite a senha.
                    var userPassword = prompt('Digite a sua senha.')
                    if (userPassword == "" || userPassword == null){
                        alert("Você não informou a senha.")

                        // Encerra a função retornando false.
                        return false
                    } else if(userPassword != user.password) {
                    alert ('Senha não cadastrada')
                    return false 
                }
            },
            firstName: function(name) {
                alert(name.split(' ')[0])
            }
        }

