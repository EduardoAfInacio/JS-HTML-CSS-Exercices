import $ from 'jquery'
import { onLoadHtmlSucces } from '../core/includes'

const duration = 600

function filterByCity(city){
    $('[wm-city]').each(function(i, e) {
        const isTarget = $(this).attr('wm-city') === city
            || city === null
        if(isTarget){
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        }else{
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}

$.fn.cityButtons = function(){
//Set não possui repetição.
    const cities = new Set
    $('[wm-city]').each(function(i, e) {
        cities.add($(e).attr('wm-city'))
    })

//Add as cidades em um Map para não possuir a mesma cidade mais de uma vez e depois transformar em um array.
    const btns = Array.from(cities).map(city => {
        const btn = $('<button>').addClass(['btn', 'btn-info']).html(city)
        btn.click(e => filterByCity(city))
        //Retorna btn para cada um, preenchendo o array btns.
         return btn
    })

    const btnAll = $('<button>').addClass(['btn', 'btn-info', 'active']).html('Todas')
    btnAll.click(e => filterByCity(null))
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)

    $(this).html(btnGroup)
}

onLoadHtmlSucces(function(){
    $('[wm-city-buttons]').cityButtons()
})
