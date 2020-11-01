import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Posts from './posts';
import Certificate from './certificate';
import Course from './course';


export default () => {
    const data = useStaticQuery(graphql`{
        codigoJson {
            data {
                certificates {
                    title
                    score
                    code
                }
                courses {
                    url
                    title
                    progress
                }
            }
        }
    }
    `);
    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto ">
                    <Posts
                        data={data.codigoJson.data.certificates}
                        card={Certificate}
                        title="Cetificados en Codigo" />
                    <Posts
                        data={data.codigoJson.data.courses}
                        card={Course}
                        title="Cursos codigo" />
                </div>
            </div>
        </section>
    );
}