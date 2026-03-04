# Pull Request Descriptions

This file contains the descriptions for the feature branches created. You can copy-paste these directly into your GitHub Pull Requests.

---

## 1. Request and Response Logging
**Branch:** `feature/request-response-logging`

### Description
Introduces a custom `LoggerMiddleware` to log incoming HTTP requests and their response times. This improves observability by providing clear console logs for every request handled by the API.

### Changes
- **NEW**: `src/common/middleware/logger.middleware.ts` - Core middleware implementation.
- **MODIFY**: `src/app.module.ts` - Registered the middleware globally.
- **DELETE**: `src/common/middleware/logging.middleware.ts` - Removed deprecated/redundant implementation.

### Verification
- Logs follow the format: `${method} ${originalUrl} ${statusCode} - ${duration}ms`.
- Example: `GET /api/users 200 - 12ms`

---

## 2. RBAC Implementation and Module Fixes
**Branch:** `feature/rbac-implementation`

### Description
Implements Role-Based Access Control (RBAC) to secure administrative endpoints and fixes critical syntax errors in the `TransactionsModule`.

### Changes
- **NEW**: `src/common/guards/roles.guard.ts` - Guard to check user roles.
- **NEW**: `src/modules/auth/roles.decorator.ts` - `@Roles()` decorator.
- **MODIFY**: `src/modules/users/user.entity.ts` - Added `role` column and `UserRole` enum.
- **MODIFY**: `src/modules/admin/admin.controller.ts` - Secured endpoints with `@Roles(UserRole.ADMIN)`.
- **MODIFY**: `src/modules/transactions/transactions.module.ts` - Fixed syntax errors (duplicate decorators and misplaced imports).

### Verification
- Verified module syntax and TypeORM entity definitions.
- `RolesGuard` correctly pulls user roles from the request object for authorization.

---

## 3. Periodic Transaction Sync
**Branch:** `feature/periodic-transaction-sync`

### Description
Implements a periodic transaction synchronization mechanism using `@nestjs/schedule` to automatically sync new transactions from the Stellar network every 5 minutes.

### Changes
- **MODIFY**: `src/app.module.ts` - Registered `ScheduleModule.forRoot()`.
- **MODIFY**: `src/modules/transactions/transactions.service.ts` - Added `@Cron()` job to trigger bulk sync.

### Verification
- Verified cron job registration on application startup.
- Logs show initialization: `Starting periodic transaction sync cron job...`.
