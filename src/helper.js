export const getGoogleApiKey = () => {
    return "AIzaSyDfR_R44Sr1DkXZuxBrH13gIB8BHOvm6e8";
};
// Text to Speech Example
export async function getGoogleVoices() {
    try {
        const apiKey = getGoogleApiKey();
        if (!apiKey) return;
        const url = `https://texttospeech.googleapis.com/v1/voices?key=${apiKey}`;
        const response = await fetch(url);
        const responseJson = await response.json();
        return responseJson.voices;
    } catch (error) {
        throw new Error(error);
    }
}
export async function googletextTobSpeech(text, voice) {
    try {
        const apiKey = getGoogleApiKey();
        if (!apiKey || !text) return;

        const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;

        const data = {
            input: {
                text: text,
            },
            voice: voice || {
                languageCode: "en-IN",
                name: "en-IN-Standard-A",
                ssmlGender: "FEMALE",
            },
            audioConfig: {
                audioEncoding: "MP3",
            },
        };

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
        });

        const responseJson = await response.json();
        // const audioBlob = toBlob(responseJson.audioContent, "audio/mpeg");
        // const audioUrl = URL.createObjectURL(audioBlob);
        // return audioUrl;
        const audioContent = responseJson.audioContent;
        return `data:audio/mp3;base64,${audioContent}`;
    } catch (error) {
        throw new Error(error);
    }
}
