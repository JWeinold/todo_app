var btn = document.getElementById('btn');
btn.onclick = add;

function add() {
  var list = document.getElementById('task_list');
  var task = document.getElementById('task_description').value;

  var assignee = '';
  if(document.getElementById('task_assignee1').checked) {
    var assignee = document.getElementById('task_assignee1').value
  }else if(document.getElementById('task_assignee2').checked) {
    var assignee = document.getElementById('task_assignee2').value
  }else if(document.getElementById('task_assignee3').checked) {
    var assignee = document.getElementById('task_assignee3').value
  }else if(document.getElementById('task_assignee4').checked) {
    var assignee = document.getElementById('task_assignee4').value
  }else if(document.getElementById('task_assignee5').checked) {
    var assignee = document.getElementById('task_assignee5').value
  }

  var difficulty = document.getElementById('task_difficulty').value;

  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode(assignee + " -- " + task + " (Difficulty: " + difficulty + ")"));
  list.appendChild(entry);
  document.getElementById('task_description').value="";
  document.getElementById('task_assignee').reset();
  document.getElementById('task_difficulty').value = Easy;

}
