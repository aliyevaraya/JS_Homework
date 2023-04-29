const input = document.querySelector("#li-input");
const addBtn = document.querySelector("#add-btn");
const ulEl = document.querySelector("#ulel");

addBtn.disabled = true;
input.addEventListener("input", function (event) {
  event.target.value ? addBtn.disabled = false : addBtn.disabled = true;
});

function liList() {
  ulEl.innerHTML += `
    <li class="list-group-item list-group-item-warning d-flex justify-content-between align-items-center mb-2">
    <span>${input.value}</span>
    <div>
      <button type="button" class="btn-success btn">Edit</button>
      <button type="button" class="btn-danger btn">Delete</button>
    </div>
  </li>`;
//   input.value = "";
//   addBtn.disabled = true;
}

addBtn.addEventListener("click", liList);

window.addEventListener("keyup", function (event) {
  if (event.code === "Enter") liList();
});

const deleteBtn = document.querySelectorAll(".btn-danger");

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", function(){
    this.closest("li").remove();
  });
});
