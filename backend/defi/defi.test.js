
const request = require('supertest');
const app = require('./serverdefi');

/*describe('Gestion defis Routes', () => {
    let server;

   
    beforeAll(() => {
      server = app.listen();
    });
  
    afterAll((done) => {
      server.close(done);
    });
  
    describe('POST /api/defi/ajouterDefi', () => {
      it('should create a new Defi successfully', async () => {
        const requestBody = {
            objet: "yiyizzddzzzhrrazertyuiopkjsfi",
            valeur: "dssfsdzfhyfeezdifjiojdssd",
          date_debut:'2023/06/30',
          date_fin:'2023/02/06'
        };
  
        const response = await request(server)
          .post('/api/defi/ajouterDefi')
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
   describe('GET /api/defi/Defi', () => {
          it('should get all Defi successfully', async () => {
            const response = await request(server)
              .get('/api/defi/Defi')  // Update the endpoint path here
              .expect(200);
      
            // Parse the response body as JSON
            const responseBody = JSON.parse(response.text);
      
            // Add your assertions here using the parsed responseBody
          });
        });
       describe('GET /api/defi/Defi/:id', () => {
          it('should get Defi successfully', async () => {
            const response = await request(server)
              .get('/api/defi/Defi/648cff401fa476f7c7a29473')  // Update the endpoint path here
              .expect(200);
      
            // Parse the response body as JSON
            const responseBody = JSON.parse(response.text);
      
            // Add your assertions here using the parsed responseBody
          });
        });
       describe('update /api/defi/Defi/:id', () => {
          it('should update a new Defi successfully', async () => {
            const requestBody = {
                objet: 'ali',
             
            };
      
            const response = await request(server)
              .patch('/api/defi/Defi/648cff401fa476f7c7a29473')
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
        describe('DELETE /api/defi/Defi/:id', () => {
          it('should delete Defi successfully', async () => {
            const response = await request(server)
              .delete('/api/defi/Defi/648cff401fa476f7c7a29473')  // Update the endpoint path here
              .expect(200);
      
            // Parse the response body as JSON
            const responseBody = JSON.parse(response.text);
      
            // Add your assertions here using the parsed responseBody
          });
        });
  });*/
  ///////////////////////////////////////////////////////////////
// Participation defis
  //////////////////////////////////////////////////////////////
  describe('Participation defis Routes', () => {
    let server;

   
    beforeAll(() => {
      server = app.listen();
    });
  
    afterAll((done) => {
      server.close(done);
    });
  
   describe('GET /api/defi/Defi', () => {
          it('should get all Defi successfully', async () => {
            const response = await request(server)
              .get('/api/defi/Defi')  // Update the endpoint path here
              .expect(200);
      
            // Parse the response body as JSON
            const responseBody = JSON.parse(response.text);
      
            // Add your assertions here using the parsed responseBody
          });
        });
   
        describe('POST /api/defi/participerdefis/648745529e59ca8e5708f1dc', () => {
            it('should create a new Defi successfully', async () => {
              const requestBody = {
                  objet: "yiyizzddzzzhrrazertyuiopkjsfi",
                  valeur: "dssfsdzfhyfeezdifjiojdssd",
                  user: 'hanib',
                  reponse:'hanib',
                date_debut:'2023/06/30',
                date_fin:'2023/02/06',
                
              };
        
              const response = await request(server)
                .post('/api/defi/participerdefis/648745529e59ca8e5708f1dc')
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
 
  });