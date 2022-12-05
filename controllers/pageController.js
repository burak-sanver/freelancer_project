const getIndexPage = (req, res) => {
    res.render("index")
}

const getContactPage = (req, res) => {
    res.render("contact")
}



export { getIndexPage, getContactPage };



