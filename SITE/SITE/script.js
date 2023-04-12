function esconder()
{
    document.getElementById('lampada').style.display= 'none';
}

function aparecer()
{
    document.getElementById('lampada').style.display= 'inline';
}

function ligar()
{
    alert('LIGADO')
    document.getElementById('lampada').setAttribute('src', 'luzLigada.gif')
}

function desligar()
{
    document.getElementById('lampada').setAttribute('src', 'luzDesligada.gif')
}