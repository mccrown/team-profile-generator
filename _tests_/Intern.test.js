// using Intern constructor 
const Intern = require('../lib/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Conner', 69, 'connersmccown@gmail.com', 'UofU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Conner', 69, 'connersmccown@gmail.com', 'UofU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Conner', 69, 'connersmccown@gmail.com', 'UofU');

    expect(intern.getRole()).toEqual("Intern");
}); 