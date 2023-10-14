
const request = require('supertest');
const app = require('./serveuruser');
/*
describe('Gestion Employee Routes', () => {
  let server;
  let userval;

  beforeAll(() => {
    server = app.listen();
  });

  afterAll((done) => {
    server.close(done);
  });

  describe('POST /api/employee/Addemp', () => {
    it('should create a new employee successfully', async () => {
      const requestBody = {
        matricule: 21228000005222522222145,
        nom: 'hannnnzznennn',
        prenom: 'bbbzzbbbbb',
        datenaiss: '01/02/2000',
        username: 'azetzzzzzzzz22zetq11ds22',
        email: 'aszqdnn22zzzzzzzzveezzuhhiuiurf222@jkkz.zez',
        password: 'zefezfzeescfsfeqq',
        departement: 'informatique',
        poste: 'dev',
        chef: 'true',
        score: '0',
        typeus: 'Employe',
        tel: '25115544111'
      };

      const response = await request(server)
        .post('/api/employee/Addemp')
        .send(requestBody)
        .expect(200)
        .catch((error) => {
          console.error('Request error:', error);
          throw error;
        });

      console.log('Response body:', response.body);

      // Add your assertions here using the response body
    });
  });
  describe('GET /api/employee/allemp', () => {
        it('should get all employee successfully', async () => {
          const response = await request(server)
            .get('/api/employee/allemp')  // Update the endpoint path here
            .expect(200);
    
          // Parse the response body as JSON
          const responseBody = JSON.parse(response.text);
    
          // Add your assertions here using the parsed responseBody
        });
      });
     describe('GET /api/employee/employee/:id', () => {
        it('should get employee successfully', async () => {
          const response = await request(server)
            .get('/api/employee/employee/648cde465de5c4656d60f430')  // Update the endpoint path here
            .expect(200);
    
          // Parse the response body as JSON
          const responseBody = JSON.parse(response.text);
    
          // Add your assertions here using the parsed responseBody
        });
      });
      describe('update /api/employee/updateEmp/:id', () => {
        it('should update a new employee successfully', async () => {
          const requestBody = {
            score: '0',
            tel: '251144111',
          };
    
          const response = await request(server)
            .patch('/api/employee/updateEmp/648cdecc39a1c75fd6286d53')
            .send(requestBody)
            .expect(200)
            .catch((error) => {
              console.error('Request error:', error);
              throw error;
            });
    
          console.log('Response body:', response.body);
    
          // Add your assertions here using the response body
        });
      });
     describe('DELETE /api/employee/emp/:id', () => {
        it('should delete employee successfully', async () => {
          const response = await request(server)
            .delete('/api/employee/emp/648cdecc39a1c75fd6286d53')  // Update the endpoint path here
            .expect(200);
    
          // Parse the response body as JSON
          const responseBody = JSON.parse(response.text);
    
          // Add your assertions here using the parsed responseBody
        });
      });
});*/

///////////////////////////////////////////////////////
//Routes feedback test
//////////////////////////////////////////////////////
describe('Gestion Feedback Routes', () => {
  let server;

  const userv = {
    username: 'hanib',
    typeus: 'Employe'
  };
 
  const userval = JSON.stringify(userv);
  beforeAll(() => {
    server = app.listen();
  });

  afterAll((done) => {
    server.close(done);
  });

  describe('POST /api/employee/ajouterFeedback', () => {
    it('should create a new Feedback successfully', async () => {
      const requestBody = {
        sujet: "yiyizzddzezdssezzzzhzkjsfi",
        reponse: "dssfsdezzfdsdsfzdifdssd",
        userval
      };

      const response = await request(server)
        .post('/api/employee/ajouterFeedback')
        .send(requestBody)
        .expect(200)
        .catch((error) => {
          console.error('Request error:', error);
          throw error;
        });

      console.log('Response body:', response.body);

      // Add your assertions here using the response body
    });
  });
  describe('GET /api/employee/feedback/username', () => {
        it('should get all Feedback successfully', async () => {
          const response = await request(server)
            .get('/api/employee/feedback/hanib')  // Update the endpoint path here
            .expect(200);
    
          // Parse the response body as JSON
          const responseBody = JSON.parse(response.text);
    
          // Add your assertions here using the parsed responseBody
        });
      });
     describe('GET /api/employee/feedback/Single/:id', () => {
        it('should get Feedback successfully', async () => {
          const response = await request(server)
            .get('/api/employee/feedback/Single/648d01c3f6f3bcaf144130fa')  // Update the endpoint path here
            .expect(200);
    
          // Parse the response body as JSON
          const responseBody = JSON.parse(response.text);
    
          // Add your assertions here using the parsed responseBody
        });
      });
     describe('update /api/employee/feedback/:id', () => {
        it('should update a new Feedback successfully', async () => {
          const requestBody = {
            sujet: 'youssef',
           
          };
    
          const response = await request(server)
            .patch('/api/employee/feedback/648d01c3f6f3bcaf144130fa')
            .send(requestBody)
            .expect(200)
            .catch((error) => {
              console.error('Request error:', error);
              throw error;
            });
    
          console.log('Response body:', response.body);
    
          // Add your assertions here using the response body
        });
      });
      describe('DELETE /api/employee/feedback/:id', () => {
        it('should delete feedback successfully', async () => {
          const response = await request(server)
            .delete('/api/employee/feedback/648d01c3f6f3bcaf144130fa')  // Update the endpoint path here
            .expect(200);
    
          // Parse the response body as JSON
          const responseBody = JSON.parse(response.text);
    
          // Add your assertions here using the parsed responseBody
        });
      });
});
