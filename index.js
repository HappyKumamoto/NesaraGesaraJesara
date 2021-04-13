for(i=1; i<=100; i++){
            document.write(i%3 === 0 ? (i%5 === 0 ? 'ANSWER ' : 'Wishy ') : (i%5 === 0 ? 'WASHY ' : i+' '));
        };
