/*
  Copyright 2020-2021 Lowdefy, Inc

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

import getDirectories from './getDirectories.js';

test('default directories', () => {
  const directories = getDirectories({
    configDirectory: '/test/config',
    options: {},
  });

  expect(directories).toEqual({
    build: '/test/config/.lowdefy/server/build',
    config: '/test/config',
    devServer: '/test/config/.lowdefy/dev',
    dotLowdefy: '/test/config/.lowdefy',
    server: '/test/config/.lowdefy/server',
  });
});

test('specify outputDirectory in options', () => {
  const directories = getDirectories({
    configDirectory: '/test/config',
    options: {
      outputDirectory: '/test/out',
    },
  });

  expect(directories).toEqual({
    build: '/test/out/server/build',
    config: '/test/config',
    devServer: '/test/out/dev',
    dotLowdefy: '/test/out',
    server: '/test/out/server',
  });
});
