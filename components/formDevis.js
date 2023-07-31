const form = document.querySelector(".form-devis")
const nameInput = document.querySelector(".name")
const entrepriseInput = document.querySelector(".entreprise")
const telInput = document.querySelector(".tel")
const emailInput = document.querySelector(".email")
const typeSiteInputs = document.querySelectorAll(".radio-type-site") 
const typeSiteAutreInput = document.querySelector(".radio-type-site-autre") 
const projectInputs = document.querySelectorAll(".radio-project") 
const projectAutreInput = document.querySelector(".radio-project-autre") 
const budgetInput = document.querySelector(".budget-select")
const detailsInput = document.querySelector(".details")
const politicInput = document.querySelector(".politic")
const errorMsg = document.querySelector(".error-msg")

const handleNameNext = () => {
    const nameValue = nameInput.value.trim()
    const entrepriseValue = entrepriseInput.value.trim()

    if (nameValue !== "" && entrepriseValue !== "") {
        document.querySelector(".name-container").style.display = "none"
        document.querySelector(".email-container").style.display = "block"
        errorMsg.textContent = ""
    } 
    else if (nameValue === "") {
        errorMsg.textContent = "Veuillez saisir votre nom."
    }
    else if (entrepriseValue === "") {
        errorMsg.textContent = "Veuillez saisir le nom de votre entreprise ou de votre organisation."
    }
}

const handleEmailNext = () => {
    const telValue = telInput.value.trim()
    const emailValue = emailInput.value.trim()

    if (telValue !== "" && emailValue !== "") {
        document.querySelector(".email-container").style.display = "none"
        document.querySelector(".type-site-container").style.display = "block"
        errorMsg.textContent = ""
    }
    else if (emailValue === "") {
        errorMsg.textContent = "Veuillez saisir votre e-mail."
    }
    else if (telValue === "") {
        errorMsg.textContent = "Veuillez saisir votre numéro de téléphone."
    }
}

const handleTypeSiteNext = () => {
    const selectedTypeSite = Array.from(typeSiteInputs).find((input) => input.checked)?.value;
    const typeSiteAutreValue = typeSiteAutreInput.value.trim()

    if (selectedTypeSite === undefined && typeSiteAutreValue === "") {
        errorMsg.textContent = "Veuillez sélectionner le type de site que vous souhaitez."
    } 
    else if (selectedTypeSite === "Autre" && typeSiteAutreValue === "") {
        errorMsg.textContent = "Veuillez précisez quel type de site vous souhaitez."
    }
    else {
        document.querySelector(".type-site-container").style.display = "none"
        document.querySelector(".project-container").style.display = "block"
        errorMsg.textContent = ""
    } 
}

const handleProjectNext = () => {
    const selectedProject = Array.from(projectInputs).find((input) => input.checked)?.value;
    const projectAutreValue = projectAutreInput.value.trim()

    if (selectedProject === undefined && projectAutreValue === "") {
        errorMsg.textContent = "Veuillez sélectionner le type de projet qui vous correspond."
    } 
    else if (selectedProject === "Autre" && projectAutreValue === "") {
        errorMsg.textContent = "Veuillez précisez quel est votre project."
    }
    else {
        document.querySelector(".project-container").style.display = "none"
        document.querySelector(".budget-container").style.display = "block"
        errorMsg.textContent = ""
    } 
}

const handleBudgetNext = () => {
    const budgetValue = budgetInput.value.trim()

    if (budgetValue === "select-choice") {
        errorMsg.textContent = "Veuillez sélectionner votre budget"
    } else {
        document.querySelector(".budget-container").style.display = "none"
        document.querySelector(".details-container").style.display = "block"
        errorMsg.textContent = ""
    }
}

const handleDetailsNext = () => {
    const detailsValue = detailsInput.value.trim()

    if (detailsValue !== "") {
        document.querySelector(".details-container").style.display = "none"
        document.querySelector(".politic-container").style.display = "block"
        errorMsg.textContent = ""
    }
    else {
        errorMsg.textContent = "Veuillez donner quelques détails supplémentaires concernant votre projet."
    } 
}

const handlePoliticNext = () => {
    const politicChecked = politicInput.checked;

    if (politicChecked) {
        document.querySelector(".politic-container").style.display = "none"
        document.querySelector(".end-container").style.display = "block"
        sendDataToEmail()
        errorMsg.textContent = ""
    } else {
        errorMsg.textContent = "Veuillez accepter les conditions de confidentialités."
    }
}

const sendDataToEmail = () => {
    const selectedTypeSite = Array.from(typeSiteInputs).find((input) => input.checked)?.value;
    const typeSiteAutreValue = typeSiteAutreInput.value.trim()
    const selectedProject = Array.from(projectInputs).find((input) => input.checked)?.value;
    const projectAutreValue = projectAutreInput.value.trim()

    const templateParams = {
        from_name: nameInput.value,
        message : nameInput.value + " souhaite un devis pour son nouveau projet pour son entreprise : " + entrepriseInput.value + ". \n"
        + "Email : " + emailInput.value + "\n" 
        + "Téléphone : " + telInput.value + "\n"
        + "Type de site : " + selectedTypeSite + "\n"
        + "Autre type de site : " + typeSiteAutreValue + '\n'
        + "Projet : " + selectedProject + '\n'
        + "Autre projet : " + projectAutreValue + '\n'
        + "Budget : " + budgetInput.value + '\n'
        + "Détails supplémentaires : " + detailsInput.value,
        to_name: "MC Studio"
    }
  
    emailjs.send('mc.studio', 'template_mfg9cl4', templateParams, '755kBu-R7PW4I1R0u')
        .then((response) => {
            console.log('E-mail envoyé avec succès !', response)
            setStep(8)
        }, (error) => {
            console.error('Erreur lors de l\'envoi de l\'e-mail :', error)
        })
}


document.querySelector(".name-container .next-btn").addEventListener("click", handleNameNext)
document.querySelector(".email-container .next-btn").addEventListener("click", handleEmailNext)
document.querySelector(".type-site-container .next-btn").addEventListener("click", handleTypeSiteNext)
document.querySelector(".project-container .next-btn").addEventListener("click", handleProjectNext)
document.querySelector(".budget-container .next-btn").addEventListener("click", handleBudgetNext)
document.querySelector(".details-container .next-btn").addEventListener("click", handleDetailsNext)
document.querySelector(".politic-container .next-btn").addEventListener("click", handlePoliticNext)


