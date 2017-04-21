$(document).ready(function() {
    $('#formIMC').on('click','#btn-save', function(e) {
        if(false){
            var peso = $("#Peso").val();
            var altura = $('#Altura').val();
            var imc= peso/(altura*altura);
            $('#valorIMC').empty();
            $('#valorIMC').prepend();
        } else {
            console.log($("#Peso").val());
            console.log($('#Altura').val());
            console.log($('#Sexo').val());
        }
            
    });
});