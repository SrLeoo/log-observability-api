import express from "express";

const app = express();
app.use(express.json());

const start = performance.now();
const PORT = process.env.PORT;

// Health check
app.get("/", (req, res) => {
    res.send("Logs Service Online");
});

const end = performance.now();

// Endpoint que recebe os logs
app.post("/logs", (req, res) => {
    console.log("Novo log recebido:");
    console.log(req.body);

    res.status(200).json({
        status: "OK",
        message: "Log recebido com sucesso",
        received_at: new Date().toISOString(),
        time_response_ms: `${(end - start).toFixed(2)}`
    });
});

// Inicializar o servidor
app.listen(PORT, () => {
    console.log(`Logs Service rodando na porta ${PORT}`);
});
