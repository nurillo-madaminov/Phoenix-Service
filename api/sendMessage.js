/**
 * Handles POST requests sent to this function.
 * @param {Request} request - The incoming request object.
 * @returns {Promise<Response>} - A response object indicating success or failure.
 */
export async function POST(request) {
    try {
        const { message } = await request.json();

        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID

        console.log(botToken)
    console.log(chatId)

        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

        const response = await fetch(url, { method: "GET" });

        if (response.ok) {
            console.log(await response.text());
            return new Response('Sent successfully', { status: 200 });
        } else {
            console.error(`Error: ${response.statusText}`);
            return new Response('Error on send', { status: response.status });
        }
    } catch (error) {
        console.error('Error:', error);
        return new Response('Error processing the request', { status: 500 });
    }
}


export function GET(request) {
    return new Response('Working')
}
