import React from 'react';
import Pannel from './Pannel';
import Section from './Section';


const Achievements = () => {
    return (
        <Section className='container mt-2' title="About Me">
            <Pannel>
                <Pannel.Header>
                    <img src="/images/dummy.jpg" className="img-thumbnail rounded" alt="dummy" />
                </Pannel.Header>
                <Pannel.Content>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel quaerat aliquam, voluptate tenetur sunt consequatur quod reprehenderit ducimus nam alias veritatis saepe sed obcaecati, quo fugiat amet cumque molestias dolorem dignissimos suscipit nulla. Quos quibusdam voluptatum modi ut labore earum, velit reiciendis aperiam natus recusandae voluptatem? Similique laudantium totam voluptas beatae! Nobis id quos quidem reiciendis assumenda, culpa molestias facilis ut amet expedita optio dolorum voluptatum magni soluta quisquam, consectetur ipsum temporibus architecto beatae blanditiis nemo sit quae. Adipisci error pariatur nisi maxime totam magni quisquam eius vitae distinctio? Dignissimos et deleniti excepturi maxime vel minima iste quae nesciunt?
                </Pannel.Content>
            </Pannel>
            <Pannel reverse>
                <Pannel.Header>
                    <img src="/images/dummy.jpg" className="img-thumbnail rounded" alt="dummy" />
                </Pannel.Header>
                <Pannel.Content>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus cumque voluptatem odio aspernatur a velit praesentium quia non at similique sint, cum, officia repellat deleniti voluptas iusto, ipsa quo unde. Iusto quidem possimus non, perspiciatis similique eveniet iure laborum tempore sapiente impedit quae. Itaque minus aut eveniet? Sunt amet sequi libero rerum explicabo cum assumenda, veritatis impedit nisi, eaque dicta iure at vel voluptates labore, enim molestias fugiat modi voluptas deserunt laboriosam quaerat quisquam ut ipsum! Nesciunt deleniti, eligendi voluptatum quasi accusamus perferendis minus reprehenderit cumque et, quia ipsum quisquam eum deserunt illum in vitae illo ab officia quo. Suscipit.
                </Pannel.Content>
            </Pannel>
        </Section>
    )
}

export default Achievements
