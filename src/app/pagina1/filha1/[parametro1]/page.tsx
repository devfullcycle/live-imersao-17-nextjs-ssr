


function Filha1ComParametroPage(request: {
    params: {parametro1: string},
    searchParams: {query_param: string}
}){
    const {parametro1} = request.params;
    const {query_param = 1} = request.searchParams;

    //sanitização
    return <div>Filha 1</div>
}

export default Filha1ComParametroPage;

