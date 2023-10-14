
const request = require('supertest');
const app = require('./serveursond');

describe('sondage Routes', () => {
  let server;
  let userval;

  beforeAll(() => {
    server = app.listen();
  });

  afterAll((done) => {
    server.close(done);
  });

  describe('POST /api/sondage/ajouterSondage', () => {
    it('should create a new sondage successfully', async () => {
      const requestBody = {
        question: 'bonaaa',
        option1: 'oui',
        option2: 'non'
      };

      const response = await request(server)
        .post('/api/sondage/ajouterSondage')
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
  describe('GET /api/sondage/sondage', () => {
        it('should get all sondage successfully', async () => {
          const response = await request(server)
            .get('/api/sondage/sondage')  // Update the endpoint path here
            .expect(200);
    
          // Parse the response body as JSON
          const responseBody = JSON.parse(response.text);
    
          // Add your assertions here using the parsed responseBody
        });
      });
      describe('GET /api/sondage/sondage/:id', () => {
        it('should get sondage successfully', async () => {
          const response = await request(server)
            .get('/api/sondage/sondage/648cd269c5dd536d951639e6')  // Update the endpoint path here
            .expect(200);
    
          // Parse the response body as JSON
          const responseBody = JSON.parse(response.text);
    
          // Add your assertions here using the parsed responseBody
        });
      });
      describe('update /api/sondage/updatesondage/:id', () => {
        it('should update a new sondage successfully', async () => {
          const requestBody = {
            question: 'bonjourhani',
            option1: 'oui',
            option2: 'non'
          };
    
          const response = await request(server)
            .patch('/api/sondage/updatesondage/648cd269c5dd536d951639e6')
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
      describe('DELETE /api/sondage/sondage/:id', () => {
        it('should delete sondage successfully', async () => {
          const response = await request(server)
            .delete('/api/sondage/sondage/648cd269c5dd536d951639e6')  // Update the endpoint path here
            .expect(200);
    
          // Parse the response body as JSON
          const responseBody = JSON.parse(response.text);
    
          // Add your assertions here using the parsed responseBody
        });
      });
});
