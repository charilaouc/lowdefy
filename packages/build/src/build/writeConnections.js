/*
  Copyright 2020 Lowdefy, Inc

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import { type } from '@lowdefy/helpers';

async function writeConnections({ components, context }) {
  if (type.isNone(components.connections)) return;
  if (!type.isArray(components.connections)) {
    throw new Error(`Connections is not an array.`);
  }
  const writePromises = components.connections.map(async (connection) => {
    await context.artifactSetter.set({
      filePath: `connections/${connection.connectionId}.json`,
      content: JSON.stringify(connection, null, 2),
    });
  });
  return Promise.all(writePromises);
}

export default writeConnections;
