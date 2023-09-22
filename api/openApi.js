import { Configuration, OpenAIApi } from "openai";
import 'dotenv/config'

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

async function createCompletion(input) {
    try {
        const openai = new OpenAIApi(configuration);
        console.log('process.env.OPENAI_API_KEY', process.env.OPENAI_API_KEY);
        const completion = await openai.createCompletion({
            model: "gpt-3.5-turbo-instruct",
            prompt: input,
            temperature: 0.6,
        });

        console.log('completion.data.choices[0].text', completion.data.choices[0].text);

        return completion.data.choices[0].text;

        // res.status(200).json({ result: completion.data.choices[0].text});
    } catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
            console.error(error.response.status, error.response.data);
            // res.status(error.response.status).json(error.response.data);
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            // res.status(500).json({
            // error: {
            //     message: 'An error occurred during your request.',
            // }
            // });
        }
    }
}

export default createCompletion;