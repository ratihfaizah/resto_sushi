function allmenu(){

    $.getJSON('menu.json', function (data) {
        let menu = data.menu;
        $.each (menu, function(i, data) {
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3" ><div class="card-body"><button type="button" class="btn btn-primary btn-lg btn-block mb-3">Pesan Sekarang</button><h3 class="card-title " >'+data.nama+'</h3><p class="card-text">'+data.deskripsi+'</p><h5 class="card-title">Rp.'+data.harga+'.-</h5><img src="img/'+data.gambar+'"width="150px" class="card-img-bottom"></div></div></div>');
        });
        
        });
}

function sortMenu(command = "asc") {
    return function menuSort(a, b) {
        var nameA = a.nama.toLowerCase();
        var nameB = b.nama.toLowerCase();
        var compare = 0;
        if (nameA > nameB) {
            compare = 1;
        } else if (nameA < nameB) {
            compare = -1;
        }
        return (command == "desc" ? compare * -1 : compare);
    }
}

    allmenu();

    $('.nav-link').on("click", function(){
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        
        let kategori = $(this).html();

        $('h1').html(kategori);

        
        if (kategori == 'All Menu '){
            allmenu();
            return;
        }

        $.getJSON('menu.json', function(data){
            let menu = data.menu;
            let content = '';
            $.each(menu, function(i, data) {
               if(data.kategori == kategori.toLowerCase()){
                   content +='<div class="col-md-4"><div class=" grid card mb-3" ><div class="card-body"><button type="button" class="btn btn-primary btn-lg btn-block mb-3" >Pesan Sekarang</button><h3 class="card-title " >'+data.nama+'</h3><p class="card-text">'+data.deskripsi+'</p><h5 class="card-title" class="btn btn-primary element-item price">Rp.'+data.harga+'.-</h5><img src="img/'+data.gambar+'"width="150px" class="card-img-bottom"></div></div></div>';
               }
            });
            $('#daftar-menu').html(content);
        });
    });

    $('#sorttinggi').on('click', function (){

        let kategori = $(this).html();
        $('button').html('HARGA TINGGI KE RENDAH');
        // $('h1').html(kategori);
    
        // if (kategori == 'All Menu') {
        //     tampilkanSemuaMenu();
        //     return;
        // }
    
        $.getJSON('menu.json', function (data){
            let menu = data.menu;
            let content = '';
            // menu.sort(function(a, b){
            //     return sortharga(a.harga, b.harga);
            //     return a.harga - b.harga;
            // });
            menu.sort(function(a, b){
                return b.harga - a.harga}
                );
    
            $.each(menu, function (i, data){
                if (data.kategori == kategori.toLowerCase()) {
                    content += '<div class="col-md-4"><div class="card mb-3" ><div class="card-body"><button type="button" class="btn btn-primary btn-lg btn-block mb-3">Pesan Sekarang</button><h3 class="card-title " >'+data.nama+'</h3><p class="card-text">'+data.deskripsi+'</p><h5 class="card-title">Rp.'+data.harga+'.-</h5><img src="img/'+data.gambar+'"width="150px" class="card-img-bottom"></div></div></div>'
                } else {
                    content += '<div class="col-md-4"><div class="card mb-3" ><div class="card-body"><button type="button" class="btn btn-primary btn-lg btn-block mb-3">Pesan Sekarang</button><h3 class="card-title " >'+data.nama+'</h3><p class="card-text">'+data.deskripsi+'</p><h5 class="card-title">Rp.'+data.harga+'.-</h5><img src="img/'+data.gambar+'"width="150px" class="card-img-bottom"></div></div></div>'
                }
            });
            $('#daftar-menu').html(content);
        });
    
    });
