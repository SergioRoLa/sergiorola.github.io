Zepto(($) => {
    let costo = 0;
    let masas = {
        cl: 50,
        cr: 75,
        li: 45
    }
    let sizes = {
        t_small: 50,
        t_medium: 70,
        t_big: 90
    }
    const ppi = 5 // price per ingredient
    const ppei = 6 // price per extra ingredient

    let _masa= $("#masa");
    let size = $("input[name=size]").filter(checked);

    console.log(size)
    
    costo += masas[_masa.val()];
    console.log(costo);
    costo += sizes[size.attr("id")];
    console.log(typeof(size.attr("id")));
});

let checked = () => this.checked;

let selected = () => this.selected;
