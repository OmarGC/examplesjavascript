class reg extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML =
            `<form id="form-login" method="POST" class="card">
            <div class="card-body">
            <h2 class="card-title">Agregar usuario</h2>
            <h6 class="card-subtitle mb-2 text-muted">Apartado de registro de usuarios</h6><br>
            <div class="form-group row">
                <label class="col-sm-8">Nombre</label>
                <div class="col-sm-10">
                    <input class="form-control" id="nombreUsuario" name="nombreUsuario" type="text" placeholder="Ingresa nombre">
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-8">Email</label>
                 <div class="col-sm-10">
                    <input type="text" class="form-control" id="email" name="email" type="email" placeholder="Ingresa email">
                </div>
            </div>
            
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-8">Password</label>
                <div class="col-sm-10">
                    <input class="form-control" id="password" name="password" type="password" placeholder="Ingresa Password">
                </div>
            </div>
            <div class="form-group row">
                <label for="staticEmail" class="col-sm-8">IDSystem</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="proto" name="idprototipo" type="text" placeholder="Ingresa proto">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-8">Tipo de usuario</label>
                <div class="col-sm-10">
                    <input class="form-control" id="tipoUsuario" name="tipoUsuario" type="text" placeholder="Ingresa tipo de usuario">
                </div>
            </div> <br>
            <center><button class="btn btn-outline-success mb-2 btn-lg" type="submit">Registra usuario</button><center>
            </div>    
        </form>`

    }
}
window.customElements.define('reg-01', reg)