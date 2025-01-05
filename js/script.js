function przyciski_click() {
    document.querySelectorAll(',button').forEach(function (wartosc) {
        wartosc.onclick = (zd) => {
            const sitename = zd.target.dataset.akcja ?? zd.target.parentNode.dataset.akcja
            fetch('sites/$sitename.html',{
                method: 'POST'
            })
            .then(response => response.text())
            .then(r => {document.querySelector('main').innerHTML = r})
            .catch(function(res) {console.log(res)})
        }
    })    
}