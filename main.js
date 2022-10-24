const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

function validate() {
    const nigNum = /(^[0]\d{10}$)|(^[\+]?[234]\d{12}$)/g.test(document.myForm.Tel.value)
    const date = new Date()
    if(isNaN(document.myForm.Tel.value) || nigNum == false){
        ///[0]{1}+[7-9]{1}+[0-1]{1}+\d{8}/.test(document.myForm.Tel.value)
        alert('Please Provide a valid Phone Number')
        document.myForm.Tel.focus();
        return false
    }
    if(Number(document.myForm.YearofBirth.value) % 4 == 0 && (document.myForm.MonthofBirth.value == "02" && document.myForm.DayofBirth.value == "29")){
        return true;
    }
    if(document.myForm.MonthofBirth.value == "02" && document.myForm.DayofBirth.value > "28"){
        alert('Please provide a valid Date of Birth')
        return false;
    }
    if(document.myForm.DayofBirth.value == "-1" || document.myForm.MonthofBirth.value =="-1" || document.myForm.YearofBirth.value == "-1") {
        alert('Please provide your Date of Birth!');
        return false;
    }
    return (true)
}
