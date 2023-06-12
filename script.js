document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
  
    var newRow = "<tr><td>" + nombre + "</td><td>" + apellido + "</td><td>" + email + "</td><td>" + telefono + "</td><td class='actions'><button onclick='editRow(this)'>Edit</button><button onclick='deleteRow(this)'>Delete</button></td></tr>";
  
    var table = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
    table.insertAdjacentHTML('beforeend', newRow);
  
    document.getElementById('contactForm').reset();
  });
  
  function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
  function editRow(btn) {
    var row = btn.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');
  
    var nombre = cells[0].innerHTML;
    var apellido = cells[1].innerHTML;
    var email = cells[2].innerHTML;
    var telefono = cells[3].innerHTML;
  
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value = apellido;
    document.getElementById('email').value = email;
    document.getElementById('telefono').value = telefono;
  
    deleteRow(btn);
  }  