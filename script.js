function getFormvalue() {
    //Write your code here
	let s1 = document.querySelectorAll("input")
	let firstName = s1[0].value
	let lastName = s1[1].value
	let fullName = firstName + " " + lastName
	alert(fullName)
}
