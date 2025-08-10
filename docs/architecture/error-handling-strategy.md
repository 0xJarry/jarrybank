# Error Handling Strategy

## **Error Flow**
```mermaid
sequenceDiagram
    participant Component
    participant ReactQuery
    participant APIRoute
    participant ExternalAPI
    participant ErrorBoundary
    
    Component->>ReactQuery: Request data
    ReactQuery->>APIRoute: HTTP request
    APIRoute->>ExternalAPI: External API call
    ExternalAPI--xAPIRoute: API Error (500)
    APIRoute->>APIRoute: Try fallback API
    APIRoute-->>ReactQuery: Fallback data or error
    ReactQuery-->>Component: Error state
    Component->>ErrorBoundary: Unhandled error
    ErrorBoundary-->>Component: Error UI
```

## **Error Response Format**
```typescript
interface ApiError {
  error: {
    code: string;           // Machine-readable error code
    message: string;        // Human-readable error message
    details?: Record<string, any>; // Additional error context
    timestamp: string;      // ISO timestamp when error occurred
    requestId: string;      // Unique request identifier for tracing
  };
}
```
