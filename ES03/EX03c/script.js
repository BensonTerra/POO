const body = document.getElementsByTagName('body')[0]
var linha = document.createElement("table")

var linhaConteudo = 
`
        <tr>
            <th>Escola</th>
            <th>Local</th>
        </tr>
        <tr>
            <td>ESMAD</td>
            <td>Vila do Conde</td>
        </tr>
`
body.innerHTML += linhaConteudo