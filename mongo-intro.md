## MongoDB

#### A database needs to be

- Reliability: Data can always be accessed
- Efficiency: We could just use files to store the data, but this solution will be slow for any serious program.
- Scalability: As our demands to get more and more data increases, databases also make it easy to increase our infrastructure capacity
- Concurrency: We can have many clients connected to our database (program) simultaneously
- Data abstractions: We can store data using complex data types that make it easy for us to save data without worrying about the underlying details of the implementation.
- High-level query language: Databases have a language in which we can ask them questions to get the data in whichever way we may need it.

#### The database that we are using is MongoDB. MongoDB is a non-relational database that stores data in collections. It stores data in flexible, JSON-like documents, meaning fields can vary from document to document and over the time the data structure can change.

### Check if mongo is installed - this way you can also access the mongo shell

```bash
$ mongo
```




#### Terminology :

#### Database -> Collections -> Documents -> Fields

#### Documents are created using JSON format (or BSON - for binary json). They are key-value objects, so we need to specify both to create our first one.

- Open compass 
- Create Connection
- Create Database 
- Insert a document
- Show update document
- Show delete document
- Then proceed to the Query Bar

Most common data types in mongoDB :

- type	Examples
- Double	3.141625
- String	“IronHack Coding Bootcamp”
- Date	“Sun Dec 08 07:15:44 UTC 2013”
- Boolean	true
- Object	{ foo: ‘bar’, }
- Array	[“apple”, “oranges”, “kiwis”]
- ObjectID	ObjectId(“52cdef7c4bab8bd675297d8a”)
- Null	null