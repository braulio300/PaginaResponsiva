$(function()
{



    /**Validacion numeros o letras.**/
        let numeros = '1234567890';
        let letras  = 'qwertyuiopasdfghjklñzxcvbnm' +
                    'QWERTYUIOPASDFGHJKLÑZXCVBNM' +
                    'ÁÉÍÓÚáéíóú-@_ ';
        let dv = '1234567890Kk-';
        /**Telefono **/
        $('.txtTelefono').keypress(function(e)
        {
            let caracter = String.fromCharCode(e.which);
            if(numeros.indexOf(caracter) < 0)
                return false;
        }); 
        /**JS para el run**/
        $('.txtRUN').keypress(function(e)
        {
            let caracter = String.fromCharCode(e.which);
            if(dv.indexOf(caracter) < 0)
                return false;
        }); 
       



        $('.txtNombre').keypress(function(e)
        {
            let caracter = String.fromCharCode(e.which);
            if(letras.indexOf(caracter) < 0)
                return false;
        }); 


    

        /**Validar que ningun campo este vacio **/
        $('.btnGuardar').click(function()
        {

            
            /** Validar que ningun Campo Este vacio**/
            let texto= "";

            texto = $('.txtCorreo').val();  
            if(texto == '')                 
            {
                alert('No especificó el Correo');
                $('.txtCorreo').focus();
                return;	
            }

            texto = $('.txtRUN').val();  
            if(texto == '')
            {
                alert('No especificó el RUN');
                $('.txtRUN').focus();
                return;	
            }

            texto = $('.txtNombre').val();   
            if(texto == '')
            {
                alert('No especificó el Nombre Completo');
                $('.txtNombre').focus();
                return;	
            }

            texto = $('.dateFecha').val();   
            if(texto == '')
            {
                alert('No especificó la Fecha de Nacimiento');
                $('.dateFecha').focus();
                return;	
            }
            texto = $('.txtTelefono').val();   
            if(texto == '')
            {
                alert('No especificó el Telefono');
                $('.txtTelefono').focus();
                return;	
            }

            texto = $('.cmbRegion').val();   
            if(texto == '' || texto == '0')
            {
                alert('No especificó la Región');
                $('.cmbRegion').focus();
                return;	
            }
            
            texto = $('.cmbCiudad').val();   
            if(texto == '' || texto == '0')
            {
                alert('No especificó la Ciudad');
                $('.cmbCiudad').focus();
                return;	
            }

            texto = $('.cmbEducacion').val();   
            if(texto == '' || texto == '0')
            {
                alert('No especificó la Educacion');
                $('.cmbEducacion').focus();
                return;	
            }
            
            //Validar Correo
            let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/
            if(!emailRegex.test($('.txtCorreo').val()))
            {
                alert('Formato del correo no es válido.');
                return;
            }
            
            alert('Los datos se ingresaron exitosamente: \n' +
                'Correo: '+$('.txtCorreo').val() + '\n'+
                'RUN: '+$('.txtRUN').val() + '\n'+
                'Nombre: '+$('.txtNombre').val() + '\n'+
                'Fecha: '+$('.dateFecha').val() + '\n' +
                'Teléfono: '+$('.txtTelefono').val() + '\n' +
                'Región: '+$('.cmbRegion').val()+ '\n' +
                'Ciudad: '+$('.cmbCiudad').val()+ '\n' +
                'Educación: '+$('.cmbEducacion').text())
                
        })
})