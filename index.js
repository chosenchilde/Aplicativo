/*
        Esse é o código JavaScript dessa página.
        */

        var name = 'Joca da Silva'
        var email = 'joca@silva.com'
        var birth = '2003-03-18'
        var cpf = '012.345.678-90'
        var address = 'Rua do Siri Molhado, 22'

        // Dados do ususário. Forma moderna!
        var user = {
            name : 'Joca da Silva',
            email : 'joca@silva.com',
            birth : '2003-03-18',
            cpf : '012.345.678-90',
            address : 'Rua do Siri Molhado, 22',
            login: function() {
                prompt('Digite seu nome e e-mail')
            },
            firstName: function(name) {
                alert(name.split(' ')[0])
            }
        }