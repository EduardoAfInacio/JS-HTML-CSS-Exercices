import $ from 'jquery'

const loadHtmlSuccesCallbacks = []

export function onLoadHtmlSucces(callback){
    if(!loadHtmlSuccesCallbacks.includes(callback)){
        loadHtmlSuccesCallbacks.push(callback)
    }
}

//Parent é a tag a ser passada com wm-include em uma tag filha.
function loadIncludes(parent){
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function (i, e){
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data){
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadHtmlSuccesCallbacks.forEach(callback => callback(data))

                loadIncludes(e)
            }
        })
    })
}

loadIncludes()