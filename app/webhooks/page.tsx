'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Webhook, Code, Shield, Zap, Clock, CheckCircle, AlertTriangle, RefreshCw, Copy, ExternalLink, Settings, Bell, Database, Globe, Lock, Eye, ArrowRight, Play, Pause, PlayCircle, PauseCircle, RotateCcw, RotateCw } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const webhookEvents = [
  {
    name: 'booking.created',
    description: 'Triggered when a new booking is created',
    version: 'v1',
    example: {
      id: 'evt_1234567890',
      type: 'booking.created',
      created: '2024-01-15T10:30:00Z',
      data: {
        object: {
          id: 'booking_123',
          title: 'Product Demo',
          start_time: '2024-01-20T14:00:00Z',
          end_time: '2024-01-20T15:00:00Z',
          attendee_email: 'client@example.com',
          status: 'confirmed',
          created_at: '2024-01-15T10:30:00Z'
        }
      }
    }
  },
  {
    name: 'booking.updated',
    description: 'Triggered when a booking is modified',
    version: 'v1',
    example: {
      id: 'evt_1234567891',
      type: 'booking.updated',
      created: '2024-01-15T11:00:00Z',
      data: {
        object: {
          id: 'booking_123',
          title: 'Updated Product Demo',
          start_time: '2024-01-20T15:00:00Z',
          end_time: '2024-01-20T16:00:00Z',
          attendee_email: 'client@example.com',
          status: 'confirmed',
          updated_at: '2024-01-15T11:00:00Z'
        }
      }
    }
  },
  {
    name: 'booking.cancelled',
    description: 'Triggered when a booking is cancelled',
    version: 'v1',
    example: {
      id: 'evt_1234567892',
      type: 'booking.cancelled',
      created: '2024-01-15T12:00:00Z',
      data: {
        object: {
          id: 'booking_123',
          title: 'Product Demo',
          start_time: '2024-01-20T14:00:00Z',
          end_time: '2024-01-20T15:00:00Z',
          attendee_email: 'client@example.com',
          status: 'cancelled',
          cancelled_at: '2024-01-15T12:00:00Z'
        }
      }
    }
  },
  {
    name: 'availability.updated',
    description: 'Triggered when user availability changes',
    version: 'v1',
    example: {
      id: 'evt_1234567893',
      type: 'availability.updated',
      created: '2024-01-15T13:00:00Z',
      data: {
        object: {
          user_id: 'user_123',
          date: '2024-01-20',
          slots: [
            { start: '09:00', end: '10:00', available: true },
            { start: '10:00', end: '11:00', available: false },
            { start: '11:00', end: '12:00', available: true }
          ],
          updated_at: '2024-01-15T13:00:00Z'
        }
      }
    }
  },
  {
    name: 'user.created',
    description: 'Triggered when a new user signs up',
    version: 'v1',
    example: {
      id: 'evt_1234567894',
      type: 'user.created',
      created: '2024-01-15T14:00:00Z',
      data: {
        object: {
          id: 'user_456',
          email: 'newuser@example.com',
          name: 'John Doe',
          created_at: '2024-01-15T14:00:00Z'
        }
      }
    }
  },
  {
    name: 'team.member_added',
    description: 'Triggered when a new member is added to a team',
    version: 'v1',
    example: {
      id: 'evt_1234567895',
      type: 'team.member_added',
      created: '2024-01-15T15:00:00Z',
      data: {
        object: {
          team_id: 'team_789',
          user_id: 'user_456',
          role: 'member',
          added_at: '2024-01-15T15:00:00Z'
        }
      }
    }
  }
]

const webhookFeatures = [
  {
    icon: Shield,
    title: 'Secure Delivery',
    description: 'All webhooks are signed with HMAC-SHA256 to ensure authenticity and prevent tampering',
  },
  {
    icon: RefreshCw,
    title: 'Automatic Retries',
    description: 'Failed webhook deliveries are automatically retried with exponential backoff',
  },
  {
    icon: Clock,
    title: 'Real-time Events',
    description: 'Receive events instantly as they happen in your Punctual account',
  },
  {
    icon: Database,
    title: 'Event History',
    description: 'Complete history of all webhook events with delivery status and response codes',
  },
  {
    icon: Settings,
    title: 'Easy Configuration',
    description: 'Simple setup through our dashboard with instant testing capabilities',
  },
  {
    icon: Globe,
    title: 'Global Reliability',
    description: 'Webhooks are delivered from multiple data centers for maximum reliability',
  },
]

const deliveryStatuses = [
  {
    status: 'delivered',
    description: 'Webhook was successfully delivered to your endpoint',
    color: 'green',
    icon: CheckCircle
  },
  {
    status: 'failed',
    description: 'Webhook delivery failed and will be retried',
    color: 'red',
    icon: AlertTriangle
  },
  {
    status: 'pending',
    description: 'Webhook is queued for delivery',
    color: 'yellow',
    icon: Clock
  },
  {
    status: 'retrying',
    description: 'Webhook is being retried after a previous failure',
    color: 'blue',
    icon: RefreshCw
  }
]

const codeExamples = {
  nodejs: `const crypto = require('crypto');
const express = require('express');
const app = express();

app.use(express.raw({ type: 'application/json' }));

app.post('/webhook', (req, res) => {
  const signature = req.headers['punctual-signature'];
  const payload = req.body;
  
  // Verify webhook signature
  const expectedSignature = crypto
    .createHmac('sha256', process.env.PUNCTUAL_WEBHOOK_SECRET)
    .update(payload)
    .digest('hex');
  
  if (signature !== expectedSignature) {
    return res.status(400).send('Invalid signature');
  }
  
  const event = JSON.parse(payload);
  
  // Handle the event
  switch (event.type) {
    case 'booking.created':
      console.log('New booking:', event.data.object);
      break;
    case 'booking.updated':
      console.log('Booking updated:', event.data.object);
      break;
    case 'booking.cancelled':
      console.log('Booking cancelled:', event.data.object);
      break;
    default:
      console.log('Unhandled event type:', event.type);
  }
  
  res.json({ received: true });
});

app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});`,
  python: `import hmac
import hashlib
import json
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    signature = request.headers.get('Punctual-Signature')
    payload = request.get_data()
    
    # Verify webhook signature
    expected_signature = hmac.new(
        bytes(os.environ['PUNCTUAL_WEBHOOK_SECRET'], 'utf-8'),
        payload,
        hashlib.sha256
    ).hexdigest()
    
    if not hmac.compare_digest(signature, expected_signature):
        return jsonify({'error': 'Invalid signature'}), 400
    
    event = json.loads(payload)
    
    # Handle the event
    if event['type'] == 'booking.created':
        print(f"New booking: {event['data']['object']}")
    elif event['type'] == 'booking.updated':
        print(f"Booking updated: {event['data']['object']}")
    elif event['type'] == 'booking.cancelled':
        print(f"Booking cancelled: {event['data']['object']}")
    else:
        print(f"Unhandled event type: {event['type']}")
    
    return jsonify({'received': True})

if __name__ == '__main__':
    app.run(port=3000)`,
  php: `<?php
$webhook_secret = $_ENV['PUNCTUAL_WEBHOOK_SECRET'];
$payload = file_get_contents('php://input');
$signature = $_SERVER['HTTP_PUNCTUAL_SIGNATURE'];

// Verify webhook signature
$expected_signature = hash_hmac('sha256', $payload, $webhook_secret);

if (!hash_equals($signature, $expected_signature)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid signature']);
    exit;
}

$event = json_decode($payload, true);

// Handle the event
switch ($event['type']) {
    case 'booking.created':
        error_log("New booking: " . json_encode($event['data']['object']));
        break;
    case 'booking.updated':
        error_log("Booking updated: " . json_encode($event['data']['object']));
        break;
    case 'booking.cancelled':
        error_log("Booking cancelled: " . json_encode($event['data']['object']));
        break;
    default:
        error_log("Unhandled event type: " . $event['type']);
}

echo json_encode(['received' => true]);
?>`
}

export default function WebhooksPage() {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-4">Webhooks</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Punctual Webhooks
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get real-time notifications about events in your Punctual account. 
              Build powerful integrations that respond instantly to scheduling changes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why use webhooks?
            </h2>
            <p className="text-lg text-gray-600">
              Powerful features for real-time integration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webhookFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webhook Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Events
            </h2>
            <p className="text-lg text-gray-600">
              All the events you can subscribe to
            </p>
          </motion.div>

          <div className="space-y-6">
            {webhookEvents.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{event.name}</h3>
                          <Badge variant="outline">{event.version}</Badge>
                        </div>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-4 text-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">JSON</span>
                        <button
                          onClick={() => copyToClipboard(JSON.stringify(event.example, null, 2), `event-${index}`)}
                          className="text-gray-400 hover:text-white"
                        >
                          {copiedCode === `event-${index}` ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                      <pre className="text-green-400 overflow-x-auto">
                        {JSON.stringify(event.example, null, 2)}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Code Examples
            </h2>
            <p className="text-lg text-gray-600">
              Get started quickly with these implementation examples
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {Object.entries(codeExamples).map(([language, code], index) => (
              <motion.div
                key={language}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      {language.charAt(0).toUpperCase() + language.slice(1)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 rounded-lg p-4 text-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">{language}</span>
                        <button
                          onClick={() => copyToClipboard(code, language)}
                          className="text-gray-400 hover:text-white"
                        >
                          {copiedCode === language ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                      <pre className="text-green-400 overflow-x-auto">
                        {code}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Status */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Delivery Status
            </h2>
            <p className="text-lg text-gray-600">
              Understanding webhook delivery states
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryStatuses.map((status, index) => (
              <motion.div
                key={status.status}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      status.color === 'green' ? 'bg-green-100' :
                      status.color === 'red' ? 'bg-red-100' :
                      status.color === 'yellow' ? 'bg-yellow-100' : 'bg-blue-100'
                    }`}>
                      <status.icon className={`w-6 h-6 ${
                        status.color === 'green' ? 'text-green-600' :
                        status.color === 'red' ? 'text-red-600' :
                        status.color === 'yellow' ? 'text-yellow-600' : 'text-blue-600'
                      }`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 capitalize">
                      {status.status}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {status.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security & Best Practices
            </h2>
            <p className="text-lg text-gray-600">
              Keep your webhooks secure and reliable
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Signature Verification</h3>
            <p className="text-gray-600 mb-6">
              Always verify webhook signatures to ensure the requests are coming from Punctual. 
              We use HMAC-SHA256 to sign all webhook payloads with your webhook secret.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Idempotency</h3>
            <p className="text-gray-600 mb-6">
              Webhook events may be delivered multiple times. Use the event ID to ensure 
              you don't process the same event twice.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">HTTPS Only</h3>
            <p className="text-gray-600 mb-6">
              Always use HTTPS endpoints for webhook receivers. We will not deliver 
              webhooks to HTTP endpoints for security reasons.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Response Handling</h3>
            <p className="text-gray-600 mb-6">
              Respond with a 2xx status code to acknowledge receipt. Any other status 
              code will cause us to retry the webhook delivery.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Set up your first webhook and start building powerful integrations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Settings className="w-5 h-5 mr-2" />
                Configure Webhooks
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Code className="w-5 h-5 mr-2" />
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
