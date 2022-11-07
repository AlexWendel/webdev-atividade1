google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(usos_urna);
        google.charts.setOnLoadCallback(eleitorado_atingido);
        google.charts.setOnLoadCallback(facebook);
        google.charts.setOnLoadCallback(youtube);
        google.charts.setOnLoadCallback(engajamentoFacebook);

        function eleitorado_atingido(){
            var data = google.visualization.arrayToDataTable([
                ['Ano', '% do eleitorado atingido', { role: 'style' }, {role: 'annotation'}],
                ['1996', 32.07, 'color: rgb(255, 194, 81)', '32,07%'],            // RGB value
                ['1998', 57.62, 'color: rgb(255, 194, 81)', '57,62%'],            // English color name
                ['2000', 100, 'color: rgb(255, 194, 81)', '100%'],
            ]);


            var options = {'title':'Adesão dos municipios brasileiros a urna eletronica (1996 - 2000)',
                        
                        'legend': {position: "none"},
                        'hAxis': {title: 'Anos'},
                        'vAxis': {title: '% do eleitorado'}

                    };


            var chart = new google.visualization.AreaChart(document.getElementById('eleitorado_atingido'));
            chart.draw(data, options);
        }

        function usos_urna() {

           
            var data = google.visualization.arrayToDataTable([
                ['Ano', '% do eleitorado', { role: 'style' }, {role: 'annotation'}],
                ['1996', 57, 'color: rgb(255, 194, 81)', 57],            // RGB value
                ['1998', 537, 'color: rgb(255, 194, 81)', 537],            // English color name
                ['2000', 5559, 'color: rgb(255, 194, 81)', 5559],
            ]);


            var options = {'title':'Eleitorado brasileiro atingido pela votação com urna eletronica (1996 - 2000)',
                        
                        'legend': {position: "none"},
                        'hAxis': {title: 'Anos'},
                        'vAxis': {title: 'Quantidade de municipios'}
                    };


            var chart = new google.visualization.AreaChart(document.getElementById('usos_urna'));
            chart.draw(data, options);

            
        }

        function facebook(){
            var data = google.visualization.arrayToDataTable([
                ['Ano', 'Quantidade de posts', { role: 'style' }, {role: 'annotation'}],
                ['2014', 10083, 'color: rgb(255, 194, 81)', 10.083],            // RGB value
                ['2015', 8918, 'color: rgb(255, 194, 81)', 8.918],            // English color name
                ['2016', 12557, 'color: rgb(255, 194, 81)', 12.557],
                ['2017', 9109, 'color: rgb(255, 194, 81)', 9.109],
                ['2018', 32052, 'color: rgb(255, 194, 81)', 32.052],
                ['2019', 10832, 'color: rgb(255, 194, 81)', 10.832],
                ['2020', 17958, 'color: rgb(255, 194, 81)', 17.958],
            ]);


            var options = {'title':'Posts com links sobre desconfiança eleitoral no Facebook (2014 - 2020)',
                        
                        'legend': {position: "none"},
                        'hAxis': {title: 'Anos'},
                        'vAxis': {title: 'Quantidade de posts'},
                   
                    };


            var chart = new google.visualization.ColumnChart(document.getElementById('posts-facebook'));
            chart.draw(data, options);
        }

        function youtube(){
            var data = google.visualization.arrayToDataTable([
                ['Ano', 'Quantidade de posts', { role: 'style' }, {role: 'annotation'}],
                ['2014', 304, 'color: rgb(255, 194, 81)', 304],            // RGB value
                ['2015', 176, 'color: rgb(255, 194, 81)', 176],            // English color name
                ['2016', 255, 'color: rgb(255, 194, 81)', 255],
                ['2017', 224, 'color: rgb(255, 194, 81)', 224],
                ['2018', 534, 'color: rgb(255, 194, 81)', 534],
                ['2019', 183, 'color: rgb(255, 194, 81)', 183],
                ['2020', 387, 'color: rgb(255, 194, 81)', 387],
            ]);


            var options = {'title':'Vídeos sobre desconfiança eleitoral no YouTube (2014 - 2020)',
                        
                        'legend': {position: "none"},
                        'hAxis': {title: 'Anos'},
                        'vAxis': {title: 'Quantidade de posts'},
                   
                    };


            var chart = new google.visualization.ColumnChart(document.getElementById('posts-youtube'));
            chart.draw(data, options);
        }

        function engajamentoFacebook(){
            var data = google.visualization.arrayToDataTable([
                ['Ano', 'Quantidade de posts', { role: 'style' }],
                ['PF desmantela quadrilha que cobrava até R$ 5 milhões para fraudar urnas eletronicas', 102458, 'color: rgb(255, 194, 81)', ],            // RGB value
                ['TSE entregou códigos de segurança das urnas eletrônicas para a Venezuela e negou acesso para auditores brasileiros', 94947, 'color: rgb(255, 194, 81)',],            // English color name
                ['Atacar o Judiciário é atacar a democracia, diz Toffoli', 65666, 'color: rgb(255, 194, 81)'],
                ['Urna com problema tumultua sessão eleitoral em Curitiba', 49156, 'color: rgb(255, 194, 81)'],
                ['Filho de Bolsonaro pede que eleitores filmem urnas em caso de problemas', 39855, 'color: rgb(255, 194, 81)'],
                ['PF prende três em suposto esquema para fraudar urna eletrônica neste ano', 37539, 'color: rgb(255, 194, 81)'],
                ['Durante conferência nos EUA, hackers invadem urnas eletrônicas em questão de minutos', 32312, 'color: rgb(255, 194, 81)'],
                ['Após Bolsonaro denunciar fraudes, TSE quer reação institucional forte contra o presidente (veja o vídeo)', 31752, 'color: rgb(255, 194, 81)'],
                ['Hacker de 19 anos mostrou como fez para fraudar eleições no Rio de Janeiro', 31319, 'color: rgb(255, 194, 81)'],            // RGB value
                ['Dilma sofre nova derrota e voto impresso nas eleições passa a ser obrigatório - PSDB - Partido...', 28892, 'color: rgb(255, 194, 81)'],            // English color name
                ['Juízes e juristas movem ação para que 100% das umas tenham voto impresso já em 2018', 26441, 'color: rgb(255, 194, 81)'],
                ['Sem a confiança da população, PSL solicita e TRE fará auditoria pública de urnas eletrônicas na sexta', 24273, 'color: rgb(255, 194, 81)'],
                ['Brasil é único país do mundo que utiliza urnas eletrônicas inauditáveis e obsoletas', 22007, 'color: rgb(255, 194, 81)'],
                ['Eleitor agride mesária e alega fraude ao tentar votar 17 para governador; assista vídeo', 21827, 'color: rgb(255, 194, 81)'],
                ['Filho de Bolsonaro pede a eleitor que filme urna; prática é crime eleitoral', 21379, 'color: rgb(255, 194, 81)']
            ]);


            var options = {'title':'Links com mais engajamento no Facebook',
                        
                        // 'legend': {position: "none"},
                        'hAxis': {title: 'Anos'},
                        'vAxis': {title: 'Quantidade de posts'},
                        pieHole: 0.4
                    };


            var chart = new google.visualization.PieChart(document.getElementById('engajamento-facebook'));
            chart.draw(data, options);
        }

        window.addEventListener('resize', function(){
            usos_urna();
            eleitorado_atingido();
            facebook();
            youtube()
            engajamentoFacebook()
        })