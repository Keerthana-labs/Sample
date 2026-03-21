const cds = require('@sap/cds');
module.exports = cds.service.impl(async function () {
const { books, author} = this.entities;

// Insert both Books and Authors
    this.on('insertData', async (req) => {
        const { Books, Author } = req.data;
        await this.send({event: 'insertBooks',data: { Books }});
        await this.send({event: 'insertAuthors',data: { Author}});
        return "Books and Author inserted successfully!";
    });

// Insert Books
    this.on('insertBooks', async (req) => {
        const { Books } = req.data;
        await INSERT.into(books).entries(Books);
        return `${books.length} Books inserted!`;
    });
 
// Insert Authors
    this.on('insertAuthors', async (req) => {
        const { Author } = req.data;
        await INSERT.into(author).entries(Author);
        return `${Author.length} Author inserted!`;
    });

});




