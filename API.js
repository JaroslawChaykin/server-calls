import {initApi} from './initApi';
import {callsService} from "./services/calls/calls";

const api = initApi();

api.get('/healthcheck', (_, res) => {
    res.send({
        status: 'OK'
    })
})

api.get('/calls', (_, res) => {
    res.send({
        data: callsService.getCalls(),
        total: callsService.getTotalLength()
    })
})

api.post('/calls', (req, res) => {
    const call = req.body;
    const createdCall = callsService.addCalls(call)

    res.send(createdCall)
})