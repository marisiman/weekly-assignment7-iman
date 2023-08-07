//const type = document.querySelector("#type")as HTMLSelectElement;
//const tofrom = document.querySelector(".todo-input") as HTMLInputElement;
//const details = document.querySelector(".todo-detail") as HTMLInputElement;
//const form = document.querySelector('.todo-form') as HTMLFormElement;
//let newText = document.getElementById('tofrom')as HTMLInputElement;
//let details = document.getElementById('details')as HTMLInputElement;
//let amount = document.getElementById('amount')as HTMLInputElement;


interface Expenses {
    id: string;
    type: string;
    tofrom: string;
    details: string;
    amount: number;
  }

//Delete list notif  
  const deleteRow = (id: string) => {
    const elem: HTMLInputElement | null = document.getElementById(id) as HTMLInputElement;
    elem.parentElement?.removeChild(elem);
  }

//Reset input data order
document.querySelector("#payment-form")?.addEventListener("reset", (e) =>{
    e.preventDefault();

    (document.querySelector("#type") as HTMLInputElement).value = "";
    (document.querySelector(".todo-input") as HTMLInputElement).value= "";
    (document.querySelector(".todo-detail") as HTMLInputElement).value ="";
    (document.querySelector("#amount") as HTMLInputElement).value ="";
});

//Submit Data
document.querySelector("#payment-form")?.addEventListener("submit", (e) =>{
    e.preventDefault();

    //Get Form Value
    const type = (document.querySelector("#type") as HTMLInputElement).value;
    const firstName = (document.querySelector(".todo-input") as HTMLInputElement).value;
    const lastName = (document.querySelector(".todo-detail") as HTMLInputElement).value;
    const amount = (document.querySelector("#amount") as HTMLInputElement).value;
    
    //Validate
    if(type == "" || firstName == "" || lastName == "" || amount =="" )
        {    
        const list = document.querySelector(".todo-list");
        const row = document.createElement("li");

          row.innerHTML = `
          <p style="color:red; font-family: sans; font-size: 2.5rem"> DATA PESANAN ANDA BELUM LENGKAP</p>
          <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
      `;

      list?.appendChild(row);
        } 
        
        
    else {
        const list = document.querySelector(".todo-list");
        const row = document.createElement("li");

          row.innerHTML = `

            <div class="row row-item row-item-${firstName == 'Cash In' ? 'green' : 'red' }">
              <div class="col-lg-6">
                    <h1 style="color:green; font-size: 2.5rem; font-weight: 650">${type}</h1>
                    <p>Anda telah memesan ${firstName} dengan tipe pengolahan ${lastName} sebanyak ${amount} kg</p>
              </div>
              <div class="todo-delete-all">
                        <button type="button" class="delete" onclick="deleteRow('${list}')">Delete</button>         
              </div>
            </div>
 
 
      `;

        list?.appendChild(row);

        }
      



      /*         
      Saya melakukan <p style="color:red; font-family: sans; font-size: 2.5rem"> ${type} </p> herbal <b><i>${firstName}</i></b> tipe <b><i>${lastName}</i></b> 
      sebanyak <b><i>${amount} kg</i></b>
      <td>              
      <a href="#" type="refresh" class="btn btn-danger btn-sm delete">Delete</a> */

    //Validate
    /*
    {
        const list = document.querySelector(".todo-list");
        const row = document.createElement("li");


        
        row.innerHTML = `
            Saya melakukan <p style="color:red; font-family: sans; font-size: 2.5rem"> ${type} </p> herbal <b><i>${firstName}</i></b> tipe <b><i>${lastName}</i></b> 
            sebanyak <b><i>${amount} kg</i></b>
            <td></br>                                    
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
        `;
        list?.appendChild(row);
        
    }*/

    });

    // Delete Data
/*
    let btnClear = document.querySelector('delete');
    let inputs = document.querySelectorAll('input');

    btnClear?.addEventListener('click',()=> {
        inputs.forEach(input => input.value="");
    });*/

    //document.querySelector(".todo-list")?.addEventListener("button", (e) =>{
    //     e.target;
    //   if(EventTarget.contains("delete")){
    //        EventTarget.parentElement.parentElement.remove();
    //    }
    //});


