 function Table() {
     var numberrow = document.getElementById('row').value;
     var numbercol = document.getElementById('col').value;
     var th = '<table border="1">\n';
     var tb = '';

     for (var i = 0; i < numberrow; i++) {
         tb += '<tr>';
         for (var j = 0; j < numbercol; j++) {
             tb += '<td>';
             tb += i + ',' + j;
             tb += '</td>'
         }
         tb += '</tr>\n';
     }
     var tf = '</table>';
     document.getElementById('gettable').innerHTML = th + tb + tf;
 }