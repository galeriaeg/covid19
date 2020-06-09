
function notification(a){
	var fleg = a;
	if(fleg=="iconNotificationOn"){
		document.getElementById('notific').alt="iconNotificationOff";
		document.getElementById('notific').className="icon-notificationOff";
		alert("Desativado");
	}
	else{
		document.getElementById('notific').alt="iconNotificationOn";
		document.getElementById('notific').className="icon-notification";
		alert("Ativado");
	}
	
}
