const path = require('path');

exports.createPages = async ({ graphql, actions }) => {


    const result = await graphql(`
    query MyQuery {
        allEducationJson {
          edges {
            node {
              slug
            }
          }
        }
      }`);

    result.data.allEducationJson.edges.forEach(element=>{
        //Destructurin en js
        const {node} = element;
        actions.createPage({
            path: node.slug,
            component: path.resolve('./src/template/education.js'),
            context:{
                slug:node.slug
            }
        });
    })

    
}