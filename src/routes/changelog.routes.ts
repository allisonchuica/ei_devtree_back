import { Router } from 'express';
import { getChangeLogs, createChangeLog } from '../controllers/changelog.controller';

const router = Router();

router.get('/changelog', getChangeLogs);
router.post('/changelog', createChangeLog);

export default router;
